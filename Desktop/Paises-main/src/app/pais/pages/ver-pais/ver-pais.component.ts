import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais_interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
pais?: Country
  constructor( 
    private activeRoute: ActivatedRoute,
    private verPais:PaisService
    ) { }

  ngOnInit(): void {
//estamos recuperando el id de la peticion y volveremos a mandar en un petición para optener una respuesta
    this.activeRoute.params
    .pipe(
      switchMap(params => this.verPais.getPaisCode(params['id']) ),
      tap(console.log)
    )
    .subscribe(resp => {
      this.pais = resp[0];
      console.log("respuesta con pipe", resp);
    })

    // this.activeRoute.params.subscribe( ({id}) =>{
    //   console.log("params",id);0
    //   this.verPais.getPaisCode(id).subscribe( pais =>{
    //     console.log("sin activate",pais);
    //   })
    // })

  }
}
