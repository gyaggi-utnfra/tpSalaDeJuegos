import { Component, Output, EventEmitter, inject} from '@angular/core';
import { usuario } from '../../models/usuario.model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
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
  userPass : string = "";
  errorLogin: boolean = false;
  errorText: string = "";

  private router = inject(Router);

  constructor(public auth: Auth, private firestore: Firestore){
  }


  private authService = inject(FirebaseAuthService);

  async logIn():Promise<void>{
    this.errorLogin = false;

    const credential : UserInterface = {
      email: this.userMail || '',
      password : this.userPass || '',
    }


    this.authService.logIn(credential).then((res) =>{
      this.router.navigateByUrl('/');
      let col = collection(this.firestore, 'logins');
      addDoc(col, { fecha: new Date(), "email": this.userMail});
    }).catch((e) =>{
      this.errorLogin = true;
      switch(e.code)
      {
        case "auth/invalid-email":
          this.errorText = "El email es invalido.";
          break;
        case "auth/missing-password":
          this.errorText = "La contraseña es invalida.";
          break;
        case "auth/invalid-credential":
          this.errorText = "Credenciales incorrectas.";
          break;
      }
    })

  }

  inicioRapido()
  {
    this.userMail = 'admin@gmail.com',
    this.userPass = 'admin@gmail.com',
    
    this.logIn();

  }

}
