import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes?: Heroe[] = []

  constructor( private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.heroesService.getBackendHeroes().
    subscribe(respuesta =>{
     this.heroes = respuesta
    })
  }
  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
  
}
