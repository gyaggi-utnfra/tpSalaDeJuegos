import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: FirebaseAuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),  // Para obtener solo el primer valor emitido
      map(user => {
        if (user) {
          return true;  // Permite el acceso si el usuario está logueado
        } else {
          this.router.navigate(['/login']);  // Redirige a login si no está logueado
          return false;
        }
      })
    );
  }
}
