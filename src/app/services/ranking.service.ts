import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from './firebase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class RankingService {

  // Usamos 'inject' de Angular para obtener la instancia de Firestore y FirebaseAuthService
  private firestore: Firestore = inject(Firestore);
  private authService: FirebaseAuthService = inject(FirebaseAuthService);

  constructor() {}

  // Método para obtener los datos del ranking
  getRanking(): Observable<any[]> {
    const rankingCollection = collection(this.firestore, 'ranking');
    return collectionData(rankingCollection, { idField: 'id' }) as Observable<any[]>;
  }

  // Método para agregar un puntaje al ranking
  async agregarPuntaje(puntaje: number, juego: string): Promise<void> {
    const rankingCollection = collection(this.firestore, 'ranking'); // Definimos la colección
    const user = this.authService.getUser(); // Obtenemos el usuario autenticado

    user.subscribe((userData: { email: any; }) => {
      if (userData) {
        const nombre = userData.email; // Usamos el email del usuario

        addDoc(rankingCollection, {
          nombre: nombre,
          puntaje: puntaje,
          juego: juego,
          fecha: new Date() // Puedes agregar la fecha si es relevante
        })
        .then(() => {
          console.log('Puntaje agregado con éxito');
        })
        .catch((error) => {
          console.error('Error al agregar puntaje: ', error);
        });
      } else {
        console.error('No hay usuario autenticado');
      }
    });
  }
}
