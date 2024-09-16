import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-dialog',
  templateUrl: './record-dialog.component.html',
  styleUrls: ['./record-dialog.component.scss']
})
export class RecordDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RecordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clickCount: number, highScore: number },
    private router: Router
  ) {}

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
      this.router.navigate(['/mouse']); 
    });
  }
}