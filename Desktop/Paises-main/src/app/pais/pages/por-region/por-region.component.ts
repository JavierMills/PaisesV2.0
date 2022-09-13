import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais_interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  // @Input('paises') paises?: string
  regionSelecionada: string = '';
  paises: Country[] = []
  regiones: string[] = ['EFTA', 'CARICOM', 'PA', 'AU','EU', 'EEU', 'AL', 'ASEAN', 'CAIS','CEFTA','NAFTA','SAARC'];
  constructor(private regionesServise : PaisService) {}
  ngOnInit(): void {}

  activarRegion(region: string) {
    if( region === this.regionSelecionada) {return;}

    this.regionSelecionada = region;
    this.paises = [];

      this.regionesServise.getRegionService( region ).subscribe( respuesta => {
        this.paises = respuesta
        console.log(respuesta);
      })
    
  }

  getClaseCSS(region: string): string {
    return this.regionSelecionada == region
      ? 'btn btn-warning'
      : 'btn btn-outline-warning';
  }


 
}
