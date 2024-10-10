import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dialog-victoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-victoria.component.html',
  styleUrls: ['./dialog-victoria.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('800ms ease-in-out', style({ opacity: 1, transform: 'scale(1.1)' })),
        animate('300ms ease-out', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
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
      this.router.navigate(['/ahorcado']);
    });
  }

  irAlHome(): void {
    this.dialogRef.close();
    this.router.navigate(['/home']);
  }
}
