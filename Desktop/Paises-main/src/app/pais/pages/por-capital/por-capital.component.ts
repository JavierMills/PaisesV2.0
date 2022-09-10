import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais_interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  capitalHolder : string = "capital"


  constructor( private paisService: PaisService) { }

  public termino : string = '';
  public ExistError : boolean = false;
  public paises : Country[] = [];


  find(termino: string){
    this.ExistError = false;
    //this.termino va a recibeir el termino que recibimos por argumento
    this.termino = termino

    this.paisService.buscarCapital(termino)
    .subscribe( (resp) => {
    console.log(resp);
  this.paises = resp;

    }, (error) => {
      this.ExistError = true;
      this.paises = [];
    })
  }

}
