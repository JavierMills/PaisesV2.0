import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais_interfaces';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  constructor() { }
@Input() paises: Country[] = [];
  ngOnInit(): void {
  }

}
