import { Component, Inject } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef  } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-record-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatButton],
  templateUrl: './record-dialog.component.html',
  styleUrls: ['./record-dialog.component.scss']
})
export class RecordDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; buttonText: string }
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}