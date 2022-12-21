import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/heroes/interfaces/heroes';
import { Usuarios } from 'src/app/heroes/interfaces/usuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBackendHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  getBackendUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${this.url}/usuarios`);
  }

  getHeroebyId( id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
  }

  getSugeriancias( parametro: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes?q=${parametro}&_limit=6`);
  }
  postearHeroe( parametro: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.url}/heroes`, parametro);
  }

  actualizarHeroe( parametro: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.url}/heroes/${parametro.id}`, parametro);
  }

  eliminarHeroe( id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/heroes/${id}`);
  }

  
}
