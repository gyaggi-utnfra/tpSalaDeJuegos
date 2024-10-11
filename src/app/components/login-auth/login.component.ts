import { Component, Output, EventEmitter, inject } from '@angular/core';
import { usuario } from '../../models/usuario.model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userMail: string = "";
  userPass: string = "";
  errorLogin: boolean = false;
  errorText: string = "";

  private router = inject(Router);

  constructor(public auth: Auth, private firestore: Firestore) { }

  private authService = inject(FirebaseAuthService);

  // Método para validar formato de email
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async logIn(): Promise<void> {
    this.errorLogin = false;

    // Validación local del correo
    if (!this.userMail || !this.validateEmail(this.userMail)) {
      this.errorLogin = true;
      this.errorText = "El email es inválido";
      return;
    }

    const credential: UserInterface = {
      email: this.userMail.trim(), // Elimina posibles espacios en blanco
      password: this.userPass || '',
    };

    this.authService.logIn(credential).then((res) => {
      this.router.navigateByUrl('/home');
      let col = collection(this.firestore, 'logins');
      addDoc(col, { fecha: new Date(), email: this.userMail });
    }).catch((e) => {
      this.errorLogin = true;
      console.error("Error al iniciar sesión: ", e);  // Para revisar el error en la consola
      switch (e.code) {
        case "auth/invalid-email":
          this.errorText = "El email es inválido.";
          break;
          case "auth/wrong-password":
            this.errorText = "La contraseña es inválida.";
            break;
        case "auth/missing-password":
          this.errorText = "La contraseña es inválida.";
          break;
        case "auth/invalid-credential":
          this.errorText = "Credenciales incorrectas.";
          break;
        default:
          this.errorText = "Error desconocido al iniciar sesión.";
          break;
      }
    });
  }

  inicioRapido() {
    this.userMail = 'admin@gmail.com',
    this.userPass = 'admin@gmail.com',

    this.logIn();
  }
}
