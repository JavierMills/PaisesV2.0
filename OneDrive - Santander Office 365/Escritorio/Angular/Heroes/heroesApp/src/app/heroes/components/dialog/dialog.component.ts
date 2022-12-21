import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: Heroe,) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true)

  }

  cerrar(){
    this.dialogRef.close()
  }

}
