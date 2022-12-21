import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Auth } from '../interface/auth.interface';
// of sirve para crear obserbables apartir del argumento que le indiquemos
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  constructor(private http: HttpClient) {}

  //como el metodo es privado hacermos un get
  get auth() {
    return this._auth;
  }

  verificaEstadoAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('id')) {
      return of(false)
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      //el map sirve para transformar lo que se reciba del operador anterior o del observable y transformarlo y retornar un nuevo valor
      map(auth => {
        this._auth = auth
        return true
      })
    )

  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      //antes de llegar al subscribe pasa por el tap
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('id', auth.id))
    );
  }
}
