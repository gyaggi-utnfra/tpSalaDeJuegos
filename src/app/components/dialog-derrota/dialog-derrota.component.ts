import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dialog-derrota',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-derrota.component.html',
  styleUrls: ['./dialog-derrota.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(0deg)' }),
        animate('1500ms ease-in', style({ opacity: 1, transform: 'rotate(720deg)' }))
      ]),
      transition(':leave', [
        animate('1500ms ease-out', style({ opacity: 0, transform: 'rotate(720deg)' }))
      ])
    ])
  ]
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
    this.router.navigate(['/home']);
  }

  jugarDeNuevo() {
    this.dialogRef.close();
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/ahorcado']);
    });
  }
}
