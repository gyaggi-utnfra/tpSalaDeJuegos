import { Component, inject } from '@angular/core';
import { Carta } from '../../../interfaces/carta.interface';
import { DialogService } from '../../../services/dialog.service';

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
  private dialog = inject(DialogService);
  constructor() {}

  ngOnInit(): void {
    this.crearMazo();
    this.iniciarJuego();
  }

  crearMazo() {

    const palos = ['basto' ,'copa', 'espada', 'oro'];

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

    while (this.indiceActual == indice) {
      indice = Math.floor(Math.random() * this.mazo.length);
    }
    this.indiceActual = indice;

    return this.mazo[indice];
  }

  verificarAdivinanza(opcion: string) {

    console.log(this.cartaActual);
    console.log(this.cartaSiguiente);
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
    if (this.intentos == 0) {
      if(this.puntaje > 0){
        this.openDialog(2);
        }else{
          this.openDialog(1);
        }
    }
    else{
      this.mezclar();
    }

  }

  play(){
    this.puntaje = 0;
    this.intentos = 3;
    this.mezclar();
    this.botonDeshabilitado = false;
  }

  mezclar()
  {
    this.cartaActual = this.cartaSiguiente;
    this.cartaSiguiente = this.obtenerCartaAleatoria();
  }

  openDialog(caso:number){
    this.botonDeshabilitado = true;
    switch(caso)
    {
      case 1:
        this.dialog.openDialog({tittle: 'PERDISTE', content: 'No conseguiste ningún punto. No te rindas!', img:'../../../assets/derrota.png', retryAction:() => this.play(), btn: 'Jugar de Nuevo'});
        break;
      case 2:
        this.dialog.openDialog({tittle: 'FELICITACIONES', content: `Conseguiste: ${this.puntaje} puntos.` , img:'../../../assets/victoria.png', retryAction:() => this.play(),btn: 'Jugar de Nuevo'});
        break;
    }
   }

}
