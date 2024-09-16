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
  styleUrl: './home.component.css'
})
export class HomeComponent {
  juegoSeleccionado! : number;

  userObs$!: Observable<User | null>;
  userValue!: User | null;
  mostrarDescripcion: boolean = false;
  descripcion :string = ""; 
  juegoTitulo:string = ""; 

  private dialog = inject(DialogService);
  private authservice = inject(FirebaseAuthService);
  private router = inject(Router);


  constructor()
  {
    this.userObs$ = this.authservice.getUser();
    this.userObs$.subscribe((response) => {
      this.userValue = response;
    })
  }

  seleccionarImagen(numeroImagen: number): void {
    this.juegoSeleccionado = numeroImagen;
    this.jugar();
  }

  jugar()
  {
    if(this.userValue?.email != null){
        switch(this.juegoSeleccionado){
          case 1:
            this.router.navigateByUrl('/ahorcado');
            break;
          case 2:
            this.router.navigateByUrl('/mayormenor');
            break;
          case 3:
            this.router.navigateByUrl('/preguntados');
            break;
            case 4:
            this.router.navigateByUrl('/mouse');
            break;
        }
      }
      else{
        this.openDialog();
      }
  }

  mostrarDesc(numDesc:number)
  {
    switch(numDesc)
    {
      case 1:
        this.juegoTitulo = "Ahorcado";
        this.descripcion = "Descubre la palabra secreta una letra a la vez antes de que se complete el dibujo del ahorcado. Cada fallo te acerca al final del juego. ¿Cuántas palabras lograrás adivinar antes de que se acabe el tiempo?";
        break;
      case 2:
        this.juegoTitulo = "Mayor o Menor";
        this.descripcion = "¡Desafía tu intuición con este divertido juego de cartas. Predice si la siguiente carta será mayor, menor o igual que la actual. Cada acierto te lleva más lejos en el juego. ¿Cuál será tu récord con tus predicciones?";
        break;
      case 3:
        this.juegoTitulo = "Pokemon";
        this.descripcion = "¡Pone a prueba tu saber sobre Pokémon! Identifica el nombre del Pokémon basándote en su imagen antes de que se agote el tiempo. Cada respuesta correcta te avanza a la siguiente ronda. ¿Cuántos Pokémon podrás identificar?";
        break;
      case 4:
        this.juegoTitulo = "Destruccion del mouse";
        this.descripcion = "¡En este juego, el objetivo es hacer clic en un área específica tantas veces como sea posible en un tiempo limitado. El jugador con más clics al final del tiempo es el ganador.";
        break;
    }
    this.mostrarDescripcion = true;
  }

  ocultarDesc(){
    this.mostrarDescripcion = false;
  }

  openDialog(){
    this.dialog.openDialog({tittle: 'Acceso denegado', content: `Aún no has iniciado sesión.`, img:'../../../assets/stop.jpg', retryAction:() => this.navLogin(), btn: 'Ir al login'});
  }

  navLogin()
  {
    this.router.navigateByUrl('/login');
  }

}

