import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.scss'
})
export class AhorcadoComponent {

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
  }

  generarAbecedario(): void {
    this.abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.abecedarioAux = this.abecedario;
  }

  seleccionarLetra(letra: string) {
    this.letraSeleccionada = letra;
    const letraIndex = this.abecedarioAux.indexOf(letra);
  
    if (letraIndex !== -1) {
      // Procesar la letra seleccionada
      let flag = false;
      let flagWin = true;
  
      for (let i = 0; i < this.palabraActual.length; i++) {
        if (this.palabraActual[i] === letra) {
          this.palabraActualAux[i] = letra;
          flag = true;
        }
        if (this.palabraActualAux[i] === '_') {
          flagWin = false;
        }
      }
  
      if (!flag) {
        this.intentos++;
        this.horca++;
      }
  
      if (this.intentos === 6) {
        this.abecedarioAux = [...this.abecedario]; // Usar el spread operator para copiar el array
        this.estaSeleccionada(letra);
      } else if (flagWin) {
        this.abecedarioAux = [...this.abecedario]; // Usar el spread operator para copiar el array
        this.estaSeleccionada(letra);
      }
  
      // Actualizar el array de letras disponibles
      this.abecedarioAux.splice(letraIndex, 1);
    }
  }

    estaSeleccionada(letter: string): boolean{
      return !this.abecedarioAux.includes(letter);
    }

    elegirPalabra()
    {
      this.deshabilitarLetras = false;
      this.intentos = 0;
      this.horca = 1;
      this.letraSeleccionada = "";
      this.abecedarioAux = [...this.abecedario];

      let indice = Math.floor(Math.random() * this.palabrasRandom.length);
      this.palabraActual = this.palabrasRandom[indice];
      this.palabraActualAux = this.palabraActual.split('').map(() => '_');
    }

}
