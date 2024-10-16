import { Component, inject } from '@angular/core';
import { Carta } from '../../../interfaces/carta.interface';
import { DialogService } from '../../../services/dialog.service';
import { RankingService } from '../../../services/ranking.service'; // Importar el servicio de ranking

@Component({
  selector: 'app-mayormenor',
  standalone: true,
  imports: [],
  templateUrl: './mayormenor.component.html',
  styleUrl: './mayormenor.component.scss'
})
export class MayormenorComponent {

  mazo: Carta[] = [];
  cartaActual?: Carta;
  cartaSiguiente?: Carta;
  indiceActual: number = -1;
  resultado?: string;
  puntaje: number = 0;
  intentos: number = 3;
  botonDeshabilitado: boolean = false;

  // Inyectar los servicios
  private dialog = inject(DialogService);
  private rankingService = inject(RankingService);

  constructor() {}

  ngOnInit(): void {
    this.crearMazo();
    this.iniciarJuego();
  }

  crearMazo() {
    const palos = ['basto', 'copa', 'espada', 'oro'];
    for (let i = 0; i < 12; i++) {
      for (const palo of palos) {
        const carta: Carta = {
          numero: i + 1,
          palo: palo,
          url: `../../../../assets/cartas/${palo}.${i+1}.png`,
        };
        this.mazo.push(carta);
      }
    }
  }

  iniciarJuego() {
    this.cartaActual = this.obtenerCartaAleatoria();
    this.cartaSiguiente = this.obtenerCartaAleatoria();
    this.resultado = '';
  }

  obtenerCartaAleatoria(): Carta {
    let indice = Math.floor(Math.random() * this.mazo.length);

    while (this.indiceActual === indice) {
      indice = Math.floor(Math.random() * this.mazo.length);
    }
    this.indiceActual = indice;
    return this.mazo[indice];
  }

  verificarAdivinanza(opcion: string) {
    if (
      (opcion === 'MAYOR' &&
        this.cartaActual &&
        this.cartaSiguiente!.numero > this.cartaActual.numero) ||
      (opcion === 'MENOR' &&
        this.cartaActual &&
        this.cartaSiguiente!.numero < this.cartaActual.numero) ||
      (opcion === 'IGUAL' &&
        this.cartaActual &&
        this.cartaSiguiente!.numero === this.cartaActual.numero)
    ) {
      this.resultado = 'Correcto';
      this.puntaje++;
    } else {
      this.resultado = 'Incorrecto';
      this.intentos--;
    }

    if (this.intentos === 0) {
      if (this.puntaje > 0) {
        this.guardarPuntaje('Jugador1', this.puntaje);  // Cambia 'Jugador1' por el nombre real del jugador
        this.openDialog(2);
      } else {
        this.openDialog(1);
      }
    } else {
      this.mezclar();
    }
  }

  play() {
    this.puntaje = 0;
    this.intentos = 3;
    this.mezclar();
    this.botonDeshabilitado = false;
  }

  mezclar() {
    this.cartaActual = this.cartaSiguiente;
    this.cartaSiguiente = this.obtenerCartaAleatoria();
  }

  openDialog(caso: number) {
    this.botonDeshabilitado = true;
    switch (caso) {
      case 1:
        this.dialog.openDialog({
          tittle: 'PERDISTE',
          content: 'No conseguiste ningún punto. No te rindas!',
          img: '../../../assets/derrota.png',
          retryAction: () => this.play(),
          btn: 'Jugar de Nuevo'
        });
        break;
      case 2:
        this.dialog.openDialog({
          tittle: 'FELICITACIONES',
          content: `Conseguiste: ${this.puntaje} puntos.`,
          img: '../../../assets/victoria.png',
          retryAction: () => this.play(),
          btn: 'Jugar de Nuevo'
        });
        break;
    }
  }

  // Método para guardar el puntaje en Firebase
  async guardarPuntaje(nombre: string, puntaje: number) {
    try {
      await this.rankingService.agregarPuntaje(puntaje, 'mayormenor');
      console.log('Puntaje guardado con éxito');
    } catch (error) {
      console.error('Error al guardar el puntaje', error);
    }
  }
}
