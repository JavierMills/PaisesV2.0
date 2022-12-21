import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'DC Marvel',
      desc: 'DC - Marvel',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  };

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    //cuando queremos extraer el id de la url debemos inicialozar todo en el ngOninit y hacer la desectructuracion del id
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroebyId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  postear() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //actualizar
      this.heroeService.actualizarHeroe(this.heroe).subscribe((respuesta) => {
        this.mostraSnack('Se ha actulizado');
      });
    } else {
      //crear
      this.heroeService.postearHeroe(this.heroe).subscribe((resp) => {
        this.router.navigate(['/heroes/editar', resp.id]);
        this.mostraSnack('Registro Creado');
      });
    }
  }

  borrarHeroe() {
    const dialog = this.dialog.open(DialogComponent, {
      width: '300px',
      height: '300px',
      data: this.heroe,
    });

    dialog.afterClosed().subscribe((result) => {
   if(result){
    this.heroeService.eliminarHeroe(this.heroe.id!).subscribe((respuesta) => {
      this.router.navigate(['/heroes']);
    });
   }
    });
  }

  mostraSnack(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
