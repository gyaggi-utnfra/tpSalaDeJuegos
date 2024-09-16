import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Importa el Router si deseas redirigir

@Component({
  selector: 'app-dialog-derrota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-derrota.component.html',
  styleUrls: ['./dialog-derrota.component.scss']
})
export class DialogDerrotaComponent {




  constructor(
    public dialogRef: MatDialogRef<DialogDerrotaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: { palabra: string }, 
    private router: Router
  ) {
    console.log('Palabra recibida:', data.palabra);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  irAlHome() {
    this.dialogRef.close();
    this.router.navigate(['/home']); // Ajusta la ruta según tu configuración
  throw new Error('Method not implemented.');
  }
  
  
  jugarDeNuevo() {
    this.dialogRef.close();
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/ahorcado']);
    });
  }

}