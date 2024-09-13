import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecordDialogComponent } from '../../record-dialog/record-dialog.component';

@Component({
  selector: 'app-mouse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.scss'
})
export class MouseComponent {
  
  clickCount: number = 0;
  gameRunning: boolean = false;
  timer: number = 10; // Tiempo límite en segundos
  timerId: any;
  highScore: number = 0;
  

  constructor(private dialog: MatDialog) {}

  startGame(): void {
    this.clickCount = 0;
    this.gameRunning = true;
    this.timer = 10;
    this.startTimer();
  }

  clickArea(): void {
    if (this.gameRunning) {
      this.clickCount++;
    }
  }

  startTimer(): void {
    this.timerId = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        clearInterval(this.timerId);
        this.gameRunning = false;
        this.updateHighScore();
      }
    }, 1000);
  }

  updateHighScore(): void {
    if (this.clickCount > this.highScore) {
      this.showRecordDialog('¡Felicidades!', '¡Has roto un nuevo record!', '¡Genial!');
      this.highScore = this.clickCount;
    }
  }

  handleLoss(): void {
    this.showRecordDialog('¡Oh no!', 'No has logrado un nuevo record. Inténtalo de nuevo.', 'Reintentar');
  }

  showRecordDialog(title: string, message: string, buttonText: string): void {
    this.dialog.open(RecordDialogComponent, {
      width: '300px',
      disableClose: true,
      data: {
        title: title,
        message: message,
        buttonText: buttonText
      },
    });
  }

}
