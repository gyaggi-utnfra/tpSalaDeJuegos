import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  juegos = [
    { id: 1, titulo: 'Ahorcado', img: '../../../assets/ahorcado.jpg', ruta: '/ahorcado', descripcion: 'Descubre la palabra secreta una letra a la vez antes de que se complete el dibujo del ahorcado.' },
    { id: 2, titulo: 'Mayor o Menor', img: '../../../assets/cartas.jpg', ruta: '/mayormenor', descripcion: '¡Desafía tu intuición con este divertido juego de cartas!' },
    { id: 3, titulo: 'Preguntados', img: '../../../assets/Pokemon.jpg', ruta: '/preguntados', descripcion: 'Identifica el nombre del Pokémon basándote en su imagen antes de que se agote el tiempo.' },
    { id: 4, titulo: 'Destrucción del Mouse', img: '../../../assets/mouseonfire.jpg', ruta: '/mouse', descripcion: 'Haz clic en un área específica tantas veces como sea posible en un tiempo limitado.' }
  ];

  userObs$!: Observable<User | null>;
  userValue!: User | null;
  mostrarDescripcion: boolean = false;
  descripcion: string = '';
  juegoTitulo: string = '';

  private dialog = inject(DialogService);
  private authservice = inject(FirebaseAuthService);
  private router = inject(Router);

  constructor() {
    this.userObs$ = this.authservice.getUser();
    this.userObs$.subscribe((response) => {
      this.userValue = response;
    });
  }

  seleccionarJuego(juego: any): void {
    this.juegoTitulo = juego.titulo;
    this.descripcion = juego.descripcion;
    this.mostrarDescripcion = true; // Cambia a true
  }
  
  ocultarDesc(): void {
    this.mostrarDescripcion = false; // Oculta la descripción
  }

  navegar(juego: any): void {
    if (this.userValue?.email) {
      this.router.navigateByUrl(juego.ruta);
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    this.dialog.openDialog({
      tittle: 'Acceso denegado',
      content: `Aún no has iniciado sesión.`,
      img: '../../../assets/stop.jpg',
      retryAction: () => this.router.navigateByUrl('/login'),
      btn: 'Ir al login'
    });
  }
}
