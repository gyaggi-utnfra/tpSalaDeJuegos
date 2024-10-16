import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingService } from '../../services/ranking.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  puntajesPreguntados: any[] = [];
  puntajesOtroJuego: any[] = [];
  puntajesAhorcado: any[] = []; // Añadido para el tercer juego
  puntajesMostrados: any[] = []; // Arreglo para mostrar los puntajes según el juego seleccionado
  juegoSeleccionado: string = 'preguntados'; // Juego seleccionado por defecto

  constructor(private rankingService: RankingService) {
    this.obtenerPuntajes();
  }

  obtenerPuntajes() {
    this.rankingService.getRanking().subscribe((puntajes) => {
      console.log(puntajes); // Verifica si se están obteniendo los puntajes

      // Filtrar y limitar los puntajes
      this.puntajesPreguntados = puntajes
        .filter(p => p.juego === 'preguntados')
        .sort((a, b) => b.puntaje - a.puntaje)
        .slice(0, 5); // Limitar a los mejores 5

      this.puntajesOtroJuego = puntajes
        .filter(p => p.juego === 'mayormenor') // Asegúrate de que este sea el nombre correcto
        .sort((a, b) => b.puntaje - a.puntaje)
        .slice(0, 5); // Limitar a los mejores 5

      this.puntajesAhorcado = puntajes
        .filter(p => p.juego === 'Ahorcado') // Filtra por el juego de ahorcado
        .sort((a, b) => b.puntaje - a.puntaje)
        .slice(0, 5); // Limitar a los mejores 5

      // Inicialmente mostrar los puntajes de "preguntados"
      this.puntajesMostrados = this.puntajesPreguntados;
    });
  }

  seleccionarJuego(juego: string) {
    this.juegoSeleccionado = juego;

    switch (juego) {
      case 'preguntados':
        this.puntajesMostrados = this.puntajesPreguntados;
        break;
      case 'mayormenor':
        this.puntajesMostrados = this.puntajesOtroJuego;
        break;
      case 'Ahorcado':
        this.puntajesMostrados = this.puntajesAhorcado;
        break;
    }
  }
}
