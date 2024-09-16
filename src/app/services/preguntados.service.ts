import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Pokemon, PokeNames } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  constructor(private http: HttpClient) { }

  getRandom(min: number, max: number): number
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPokemon(): Observable<Pokemon | undefined>{
    let http = "https://pokeapi.co/api/v2/pokemon/" + this.getRandom(1,300).toString();
    return this.http.get<Pokemon>(http).pipe(
      catchError((e) => {
        console.log(e);
        return of (undefined);
      })
    )
  }

  getOpciones(): Observable<PokeNames[]> {
    let http = "https://pokeapi.co/api/v2/pokemon?limit=300";    
    return this.http.get<any>(http).pipe(
      map(response => response.results)
      
    );
  }

}
