import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-victoria',
  standalone: true,
  templateUrl: './dialog-victoria.component.html',
  styleUrls: ['./dialog-victoria.component.scss']
})
export class DialogVictoriaComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogVictoriaComponent>,
    private router: Router
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
  
  jugarDeNuevo(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/ahorcado']); // Ajusta la ruta según tu lógica de navegación
    });
  }

  irAlHome(): void {
    this.dialogRef.close();
    this.router.navigate(['/home']); // Ajusta la ruta según tu configuración
  }
}