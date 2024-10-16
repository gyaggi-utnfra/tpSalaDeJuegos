import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDerrotaComponent } from '../../dialog-derrota/dialog-derrota.component';
import { RankingService } from '../../../services/ranking.service';

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
  private rankingService = inject(RankingService);
  palabrasRandom: string[] = [
    'ventana', 'lámpara', 'sofá', 'escritorio', 'alfombra', 'cuadro', 'mesa', 'silla', 'cortina', 
    'cerca', 'tapiz', 'puerta', 'espejo', 'estante', 'estufa', 'chimenea', 'refrigerador', 'horno', 
    'lavadora', 'secadora', 'balcón', 'jardín', 'patio', 'terraza', 'barbacoa', 'parrilla', 'maceta',
    'grifo', 'ducha', 'bañera', 'coche', 'moto', 'bicicleta', 'camioneta', 'autobús', 'camión', 'barco', 
    'yate', 'canoa', 'avión', 'teclado', 'ratón', 'monitor', 'altavoz', 'auriculares', 'impresora', 
    'scanner', 'cámara', 'micrófono', 'cargador'
  ];

  // Nuevas propiedades
  vidas: number = 2; // Dos vidas
  palabrasAcertadas: number = 0; // Contador de palabras acertadas

  ngOnInit(): void {
    this.generarAbecedario();
    this.elegirPalabra(); // Inicializa una palabra al inicio
  }

  generarAbecedario(): void {
    this.abecedario = 'abcdefghijklmnopqrstuvwxyzñ'.split('');
    this.abecedarioAux = [...this.abecedario];
  }

  seleccionarLetra(letra: string) {
    const letraNormalizada = this.normalizeText(letra.toLowerCase());
    
    // Solo proceder si la letra seleccionada es válida
    if (this.abecedarioAux.includes(letraNormalizada)) {
      this.letraSeleccionada = letraNormalizada.toUpperCase();
      const letraIndex = this.abecedarioAux.indexOf(letraNormalizada);
      let acertoLetra = false;
  
      // Revisar si la letra está en la palabra
      for (let i = 0; i < this.palabraActual.length; i++) {
        if (this.normalizeText(this.palabraActual[i]) === letraNormalizada) {
          this.palabraActualAux[i] = letraNormalizada.toUpperCase();
          acertoLetra = true;
        }
      }
  
      // Si no se acertó la letra
      if (!acertoLetra) {
        this.intentos++;
        this.horca++; // Incrementa el número de horca mostrado
  
        if (this.intentos === 6) {
          this.vidas--; // Se pierde una vida
          this.intentos = 0; // Reiniciar intentos al perder una vida
          this.horca = 1; // Reiniciar la horca
  
          if (this.vidas === 0) { // Si no hay vidas
            this.deshabilitarLetras = true;
            if (this.palabrasAcertadas != 0){
              this.guardarPuntaje("Ahorcado",this.palabrasAcertadas)
            }
            this.dialog.open(DialogDerrotaComponent, {
              data: { palabra: this.palabraActual.toUpperCase() },
              disableClose: true,
            });
            return;
          }
        }
      }   
  
      // Deshabilitar la letra seleccionada
      this.abecedarioAux.splice(letraIndex, 1);
  
      // Comprobar si el jugador ha ganado
      if (!this.palabraActualAux.includes('_')) {
        this.palabrasAcertadas++; // Incrementa palabras acertadas
        this.actualizarPalabra(); // Cambia la palabra para un nuevo juego
      }
    }
  }
  
  actualizarPalabra() {
    this.elegirPalabra(); // Elige una nueva palabra
    this.palabraActualAux = Array(this.palabraActual.length).fill('_'); // Reinicia la palabra auxiliar
  }

  elegirPalabra() {
    this.deshabilitarLetras = false;
    this.intentos = 0;
    this.horca = 1;
    this.letraSeleccionada = "";
    this.abecedarioAux = [...this.abecedario];

    const indice = Math.floor(Math.random() * this.palabrasRandom.length);
    this.palabraActual = this.palabrasRandom[indice];
    this.palabraActualAux = Array(this.palabraActual.length).fill('_'); // Inicializa con guiones bajos
  }

  estaSeleccionada(letter: string): boolean {
    return !this.abecedarioAux.includes(letter);
  }

  normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  async guardarPuntaje(nombre: string, puntaje: number) {
    try {
      await this.rankingService.agregarPuntaje(puntaje, nombre);
      console.log('Puntaje guardado con éxito');
    } catch (error) {
      console.error('Error al guardar el puntaje', error);
    }
  }
}
