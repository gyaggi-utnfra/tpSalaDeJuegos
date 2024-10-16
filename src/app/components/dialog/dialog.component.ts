import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule], // Importa los módulos necesarios
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('slideInBounce', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Comienza fuera de la pantalla
        animate('0.6s ease', style({ transform: 'translateX(0)', opacity: 1 })) // Se mueve a la posición original
      ])
    ])
  ]
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  onMenuClick(): void {
    this.router.navigateByUrl('/home');
  }
  

  onRetryClick(): void {
    if (this.data.retryAction) {
      this.data.retryAction();
    }
  }


}
