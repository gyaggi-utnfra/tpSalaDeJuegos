import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../components/dialog/dialog.component';
import { DialogData } from '../interfaces/dialog-data';
import { NombreJugadorDialogComponent } from '../components/nombre-jugador-dialog/nombre-jugador-dialog.component';



@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogOpen = false;

  constructor(private matDialog: MatDialog,private dialog: MatDialog) { }

  openDialog(data:DialogData){
    this.matDialog.open(DialogComponent, {data, disableClose: true});
  }

  openDialogNombre(): Promise<string | null> {
    const dialogRef = this.dialog.open(NombreJugadorDialogComponent, {
      width: '250px',
      data: { nombre: '' } // Si necesitas pasar algún dato inicial
    });

    return dialogRef.afterClosed().toPromise(); // Retorna una promesa
  }

}
