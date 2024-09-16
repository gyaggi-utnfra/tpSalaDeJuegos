import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PreguntadosService } from '../../../services/preguntados.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeNames, Pokemon, Sprites } from '../../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.scss'
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
  pokemonObs$! :Observable<Pokemon | undefined>;
  private dialog = inject(DialogService);
  excludedPokemonNames: PokeNames[] = [];

  remainingTime: number = 30; // Duración del temporizador en segundos
  intervalId: any;

  openDialog(caso:number){
    this.botonDeshabilitado = true;

    switch(caso)
    {
      case 1:
        if(this.puntaje > 0)
          {
            this.dialog.openDialog({tittle: 'JUEGO FINALIZADO!', content: `POKEMONES ATRAPADOS: ${this.puntaje}`, img:'../../../assets/derrota.png', retryAction:() => this.play(), btn: 'JUGAR DE NUEVO'});

          }
          else{
            this.dialog.openDialog({tittle: 'PERDISTE', content: 'SIGUE INTENTANDOLO', img:'../../../assets/derrota.png', retryAction:() => this.play(), btn: 'JUGAR DE NUEVO'});
          }
        break;
      case 2:
        if(this.puntaje > 0)
          {
            this.dialog.openDialog({tittle: 'EL TIEMPO SE AGOTO', content: `POKEMONES ATRAPADOS: ${this.puntaje}` , img:'../../../assets/victoria.png', retryAction:() => this.play(), btn: 'JUGAR DE NUEVO'});
          }
          else{
            this.dialog.openDialog({tittle: 'EL TIEMPO SE AGOTO', content: 'NO ATRAPASTE POKEMONES!', img:'../../../assets/derrota.png', retryAction:() => this.play(), btn: 'JUGAR DE NUEVO'});
          }
        break;
      case 3:
        this.dialog.openDialog({tittle: 'ESTAS LISTO?', content: 'ATRAPEMOS POKEMONES', img:'../../../assets/pokebola.png', retryAction:() => this.play(), btn: 'COMENZAR'});
        break;
      case 4:
        this.dialog.openDialog({tittle: 'FELICITACIONES!', content: 'Adivinaste todos los pokemons!', img:'../../../assets/estaslisto.png', retryAction:() => this.play(), btn: 'COMENZAR'});
        break;
    }
  }

  constructor(private pokemonService: PreguntadosService){
    this.openDialog(3);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }


  play()
  {
    if(this.puntaje == 300)
    {
      this.stopTimer();
      this.excludedPokemonNames = [];
      this.openDialog(4);
      this.puntaje = 0;
    }else{

      this.resetTimer();
      this.startTimer();
      this.pokemonObs$ = this.pokemonService.getPokemon();
      
      this.pokemonObs$.subscribe((response) =>{
        this.pokemon = response;
        this.excludedPokemonNames?.push({ name: response!.name, url: '' });
        this.pokemonService.getOpciones().subscribe((response) =>{
          this.pokemons = response;
          this.opcionesRandom();
        });
      });
        
      this.botonDeshabilitado = false;
    }

  }

  opcionesRandom(): void {

    const filteredPokemons = this.pokemons!.filter(poke => !this.excludedPokemonNames.some(excluded => excluded.name.toLowerCase() === poke.name.toLowerCase()))

    //Mezclar
    const shuffled = filteredPokemons.sort(() => 0.5 - Math.random());
    //Selecciono 3
    const selectedOptions = shuffled.slice(0, 3);
    //Pusheo la opción correcta
    selectedOptions.push({ name: this.pokemon!.name ?? '', url: '' });
    //Mezclar
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

  verificarRespuesta(opcion :number)
  {
    if(this.botonDeshabilitado != true)
    {
      switch(opcion)
      {
        case 1:
          if(this.opcionUno == this.pokemon?.name)
            {
              this.puntaje++;
              this.play();
            }
            else{
              this.excludedPokemonNames = [];
              this.stopTimer();
              this.openDialog(1);
              this.puntaje = 0;
            }
          break;
        case 2:
          if(this.opcionDos == this.pokemon?.name)
            {
              this.puntaje++;
              this.play();
            }
            else{
              this.excludedPokemonNames = [];
              this.stopTimer();
              this.openDialog(1);
              this.puntaje = 0;
            }
          break;
        case 3:
          if(this.opcionTres == this.pokemon?.name) 
            {
              this.puntaje++;
              this.play();
            }
            else{
              this.excludedPokemonNames = [];
              this.stopTimer();
              this.openDialog(1);
              this.puntaje = 0;
            }
          break;
        case 4:
          if(this.opcionCuatro == this.pokemon?.name)
            {
              this.puntaje++;
              this.play();
            }
            else{
              this.excludedPokemonNames = [];
              this.stopTimer();
              this.openDialog(1);
              this.puntaje = 0;
            }
          break;
      }
    }
  }
  
  startTimer(): void {
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) { 
        this.stopTimer();
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
    this.remainingTime = 10;
  }

  reiniciar()
  {
    this.excludedPokemonNames = [];
    this.play();
  }

}
