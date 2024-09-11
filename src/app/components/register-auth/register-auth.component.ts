import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import { inject, signal } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-register-auth',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './register-auth.component.html',
  styleUrl: './register-auth.component.css'
})
export class RegisterAuthComponent {
    userMail : string = "";
    userPass : string = "";

    private authService = inject(FirebaseAuthService);
    private router = inject(Router);
    errorRegister: boolean = false;
    errorText: string = "";

  register(){
    this.errorRegister = false;
    const credential : UserInterface = {
      email: this.userMail || '',
      password : this.userPass || '',
    }
    this.authService.register(credential).then((res) =>{
      this.router.navigateByUrl('/home');
    }).catch((e) =>{
      this.errorRegister = true;
      console.log(e.code);
      
      switch(e.code)
      {
        case "auth/invalid-email":
          this.errorText = "El email es invalido.";
          break;
        case "auth/missing-password":
          this.errorText = "Se requiere contraseña.";
          break;
        case "auth/weak-password":
          this.errorText = "Contraseña debil.";
          break;
        case "auth/email-already-in-use":
          this.errorText = "El email esta en uso.";
          break;
      }
    })
  } 
  

}
