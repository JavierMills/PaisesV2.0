import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe, tap} from 'rxjs';
import { Country } from '../interfaces/pais_interfaces';



@Injectable({
  providedIn: 'root'
})
export class PaisService {
private apiURL : string = 'https://restcountries.com/v3.1'
private apiUrlRegion : string = 'https://restcountries.com/v2'

get params(){
  return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
}

constructor( private http: HttpClient) { }

buscarPais( value : string): Observable<Country[]>{

  const urlComplete= `${this.apiURL}/name/${ value }`;

  return this.http.get<Country[]>(urlComplete, {params:this.params});

}

buscarCapital( value : string): Observable<Country[]>{

  const urlComplete = `${this.apiURL}/capital/${ value }`;
  return this.http.get<Country[]>(urlComplete, {params:this.params});

}


getPaisCode( id : string): Observable<Country>{
  const urlComplete = `${this.apiURL}/alpha/${ id }`;
  return this.http.get<Country>(urlComplete);
}
getRegionService( region: string): Observable<Country[]>{
  const urlComplete = `${this.apiUrlRegion}/regionalbloc/${ region }`;
  return this.http.get<Country[]>(urlComplete ,{params:this.params});
  pipe(
    tap(console.log)
  )
}
}