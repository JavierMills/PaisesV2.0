import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/pais_interfaces';



@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiURL : string = 'https://restcountries.com/v3.1'


constructor( private http: HttpClient) { }

buscarPais( value : string): Observable<Country[]>{

  const urlComplete= `${this.apiURL}/name/${ value }`;

  return this.http.get<Country[]>(urlComplete);

}

buscarCapital( value : string): Observable<Country[]>{

  const urlComplete = `${this.apiURL}/capital/${ value }`;
  return this.http.get<Country[]>(urlComplete);

}


getPaisCode( id : string): Observable<Country>{

  const urlComplete = `${this.apiURL}/alpha/${ id }`;
  return this.http.get<Country>(urlComplete);

}

}