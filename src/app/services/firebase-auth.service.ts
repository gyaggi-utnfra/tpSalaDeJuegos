import { Injectable } from '@angular/core';
import { inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user, authState, UserCredential, } from '@angular/fire/auth';
import { UserInterface } from '../interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  private auth:Auth = inject(Auth);

  register(userCredential:UserInterface): Promise<UserCredential>{
    return createUserWithEmailAndPassword(this.auth, userCredential.email, userCredential.password);
  }

  logIn(userCredential:UserInterface){
    return signInWithEmailAndPassword(this.auth, userCredential.email, userCredential.password);
  }

  logOut():Promise<void>
  {
    return this.auth.signOut();
  }
  
  getUser(){
    return authState(this.auth);
  }
}
