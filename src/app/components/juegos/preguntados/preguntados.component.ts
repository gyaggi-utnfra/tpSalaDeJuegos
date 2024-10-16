import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PreguntadosService } from '../../../services/preguntados.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeNames, Pokemon } from '../../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DialogService } from '../../../services/dialog.service';
import { RankingService } from '../../../services/ranking.service';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent {
  puntaje: number = 0;
  pokemon!: Pokemon | undefined;
  pokemons!: PokeNames[] | undefined;
  opcionUno!: string;
  opcionDos!: string;
  opcionTres!: string;
  opcionCuatro!: string;
  botonDeshabilitado: boolean = false;
  pokemonObs$!: Observable<Pokemon | undefined>;
  private dialog = inject(DialogService);
  excludedPokemonNames: PokeNames[] = [];
  juegoActual: string = 'preguntados';
  remainingTime: number = 10; // Duración del temporizador en segundos
  intervalId: any;
  juegoActivo: boolean = false; // Nueva propiedad para controlar el estado del juego

  openDialog(caso: number) {
    this.botonDeshabilitado = true;

    switch (caso) {
      case 1: // Cuando se pierde
        this.finDelJuego(); // Guardar el puntaje antes de abrir el diálogo
        this.dialog.openDialog({
          tittle: this.puntaje > 0 ? 'JUEGO FINALIZADO!' : 'PERDISTE',
          content: this.puntaje > 0 ? `POKEMONES ATRAPADOS: ${this.puntaje}` : 'SIGUE INTENTANDOLO',
          img: '../../../assets/derrota.png',
          retryAction: () => this.play(),
          btn: 'JUGAR DE NUEVO'
        });
        break;
      case 2: // Cuando el tiempo se agota
        this.finDelJuego(); // Guardar el puntaje antes de abrir el diálogo
        this.dialog.openDialog({
          tittle: 'EL TIEMPO SE AGOTÓ',
          content: this.puntaje > 0 ? `POKEMONES ATRAPADOS: ${this.puntaje}` : 'NO ATRAPASTE POKEMONES!',
          img: '../../../assets/derrota.png',
          retryAction: () => this.play(),
          btn: 'JUGAR DE NUEVO'
        });
        break;
      case 3: // Inicio del juego
        this.dialog.openDialog({
          tittle: 'ESTAS LISTO?',
          content: 'ATRAPEMOS POKEMONES',
          img: '../../../assets/pokebola.png',
          retryAction: () => this.play(),
          btn: 'COMENZAR'
        });
        break;
      case 4: // Cuando se adivinan todos los Pokémon
        this.dialog.openDialog({
          tittle: 'FELICITACIONES!',
          content: 'Adivinaste todos los pokemons!',
          img: '../../../assets/estaslisto.png',
          retryAction: () => {
            this.finDelJuego(); // Guardar el puntaje primero
            this.play(); // Luego reiniciar el juego
          },
          btn: 'COMENZAR'
        });
        break;
    }
  }

  constructor(private pokemonService: PreguntadosService, private rankingService: RankingService) {
    this.openDialog(3);
  }

  ngOnDestroy(): void {
    this.stopTimer();
    this.juegoActivo = false; // Asegúrate de desactivar el juego al destruir el componente
  }

  play() {
    if (!this.juegoActivo) { // Comprobar si el juego está activo
      this.juegoActivo = true; // Activar el juego
      if (this.puntaje == 300) {
        this.stopTimer();
        this.excludedPokemonNames = [];
        this.openDialog(4);
        this.puntaje = 0;
      } else {
        this.resetTimer();
        this.startTimer();
        this.pokemonObs$ = this.pokemonService.getPokemon();
        this.pokemonObs$.subscribe((response) => {
          this.pokemon = response;
          this.excludedPokemonNames?.push({ name: response!.name, url: '' });
          this.pokemonService.getOpciones().subscribe((response) => {
            this.pokemons = response;
            this.opcionesRandom();
          });
        });
        this.botonDeshabilitado = false;
      }
    }
  }

  opcionesRandom(): void {
    const filteredPokemons = this.pokemons!.filter(poke => !this.excludedPokemonNames.some(excluded => excluded.name.toLowerCase() === poke.name.toLowerCase()));

    const shuffled = filteredPokemons.sort(() => 0.5 - Math.random());
    const selectedOptions = shuffled.slice(0, 3);
    selectedOptions.push({ name: this.pokemon!.name ?? '', url: '' });
    const finalOptions = selectedOptions.sort(() => 0.5 - Math.random());

    if (finalOptions.length >= 4) {
      this.opcionUno = finalOptions[0].name;
      this.opcionDos = finalOptions[1].name;
      this.opcionTres = finalOptions[2].name;
      this.opcionCuatro = finalOptions[3].name;
    } else {
      console.error("No hay suficientes opciones disponibles.");
    }
  }

  verificarRespuesta(opcion: number) {
    if (!this.botonDeshabilitado) {
      const isCorrect = 
        (opcion === 1 && this.opcionUno === this.pokemon?.name) ||
        (opcion === 2 && this.opcionDos === this.pokemon?.name) ||
        (opcion === 3 && this.opcionTres === this.pokemon?.name) ||
        (opcion === 4 && this.opcionCuatro === this.pokemon?.name);

      if (isCorrect) {
        this.puntaje++;
        this.play();
      } else {
        this.excludedPokemonNames = [];
        this.stopTimer();
        this.juegoActivo = false; // Desactivar el juego al fallar
        this.openDialog(1);
      }
    }
  }

  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        this.stopTimer();
        this.juegoActivo = false; // Desactivar el juego cuando el tiempo se agota
        this.openDialog(2);
        this.excludedPokemonNames = [];
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.intervalId);
  }

  resetTimer(): void {
    this.stopTimer();
    this.remainingTime = 10; // O ajusta el tiempo como desees
  }

  reiniciar() {
    this.excludedPokemonNames = [];
    this.play();
  }

  finDelJuego() {
    this.excludedPokemonNames = [];
    this.stopTimer();
    this.juegoActivo = false; // Desactivar el juego al finalizar

    if (this.puntaje != 0) {
      this.rankingService.agregarPuntaje(this.puntaje, this.juegoActual)
        .then(() => {
          console.log('Puntaje guardado exitosamente');
        })
        .catch((error) => {
          console.error('Error al guardar el puntaje:', error);
        });
    }
    this.puntaje = 0;
    this.reiniciar();
  }
}
