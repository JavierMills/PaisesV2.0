import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  busqueda: string = '';
  heroes: Heroe[] = [];


  hereoeSeleccionado: Heroe | undefined;

  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesServices
      .getSugeriancias(this.busqueda.trim())
      .subscribe((heroe) => (this.heroes = heroe))
    
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    
    if(!event.option.value){
      this.hereoeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value
    this.busqueda = heroe.superhero

    this.heroesServices.getHeroebyId( heroe.id!).subscribe( heroe => this.hereoeSeleccionado = heroe);

  }
}
