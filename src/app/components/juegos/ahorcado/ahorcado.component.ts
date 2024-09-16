import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVictoriaComponent } from '../../dialog-victoria/dialog-victoria.component';
import { DialogDerrotaComponent } from '../../dialog-derrota/dialog-derrota.component';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {

  constructor(private dialog: MatDialog) {}

  abecedario: string[] = [];
  abecedarioAux: string[] = [];
  letraSeleccionada: string = "";
  intentos: number = 0;
  horca: number = 1;
  palabraActual: string = "";
  palabraActualAux!: string[];
  deshabilitarLetras: boolean = false;
  palabrasRandom: string[] = [
    'ventana', 'lámpara', 'sofá', 'escritorio', 'alfombra', 'cuadro', 'mesa', 'silla', 'cortina', 
    'cerca', 'tapiz', 'puerta', 'espejo', 'estante', 'estufa', 'chimenea', 'refrigerador', 'horno', 
    'lavadora', 'secadora', 'balcón', 'jardín', 'patio', 'terraza', 'barbacoa', 'parrilla', 'maceta',
    'grifo', 'ducha', 'bañera', 'coche', 'moto', 'bicicleta', 'camioneta', 'autobús', 'camión', 'barco', 
    'yate', 'canoa', 'avión', 'teclado', 'ratón', 'monitor', 'altavoz', 'auriculares', 'impresora', 
    'scanner', 'cámara', 'micrófono', 'cargador'
  ];

  ngOnInit(): void {
    this.generarAbecedario();
    this.elegirPalabra(); // Inicializa una palabra al inicio
  }

  generarAbecedario(): void {
    this.abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.abecedarioAux = [...this.abecedario];
  }

  seleccionarLetra(letra: string) {
    this.letraSeleccionada = letra.toUpperCase();
    const letraNormalizada = this.normalizeText(letra).toUpperCase();
    const letraIndex = this.abecedarioAux.indexOf(letra.toLowerCase());

    if (letraIndex !== -1) {
      let flag = false;
      let flagWin = true;

      for (let i = 0; i < this.palabraActual.length; i++) {
        if (this.normalizeText(this.palabraActual[i]).toUpperCase() === letraNormalizada) {
          this.palabraActualAux[i] = this.palabraActual[i].toUpperCase();
          flag = true;
        }
        if (this.palabraActualAux[i] === '_') {
          flagWin = false;
        }
      }

      if (!flag) {
        this.intentos++;
        if(this.horca<6)
        this.horca++;
      }

      if (this.intentos === 6) {
        this.deshabilitarLetras = true;
        this.dialog.open(DialogDerrotaComponent, {
          data: { palabra: this.palabraActual.toUpperCase() },
          disableClose: true,
        });
      } 
      else if (flagWin) {
        this.deshabilitarLetras = true;
        this.dialog.open(DialogVictoriaComponent);
      }

      // Actualizar el array de letras disponibles
      this.abecedarioAux.splice(letraIndex, 1);
    }
  }

  estaSeleccionada(letter: string): boolean {
    return !this.abecedarioAux.includes(letter.toLowerCase());
  }

  elegirPalabra() {
    this.deshabilitarLetras = false;
    this.intentos = 0;
    this.horca = 1;
    this.letraSeleccionada = "";
    this.abecedarioAux = [...this.abecedario];

    let indice = Math.floor(Math.random() * this.palabrasRandom.length);
    this.palabraActual = this.palabrasRandom[indice];
    this.palabraActualAux = this.palabraActual.split('').map(() => '_');
  }

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

}