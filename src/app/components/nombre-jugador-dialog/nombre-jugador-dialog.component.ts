import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nombre-jugador-dialog',
  template: `
    <h2>Ingresa tu nombre</h2>
    <input [(ngModel)]="data.nombre" placeholder="Nombre del jugador" />
    <button (click)="onNoClick()">Cancelar</button>
    <button (click)="onSaveClick()">Guardar</button>
  `,
  standalone:true,
  imports: [FormsModule]
})
export class NombreJugadorDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NombreJugadorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nombre: string },
  ) {}

  onNoClick(): void {
    this.dialogRef.close(null); // Cierra sin guardar
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data.nombre); // Cierra y devuelve el nombre
  }
}
