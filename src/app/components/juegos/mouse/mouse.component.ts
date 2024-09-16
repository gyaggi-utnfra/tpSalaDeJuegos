import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDerrotaComponent } from '../../dialog-derrota/dialog-derrota.component';
import { RecordDialogComponent } from '../../record-dialog/record-dialog.component';
import { RecordServiceService } from '../../../services/record-service.service';

@Component({
  selector: 'app-mouse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit {
  
  clickCount: number = 0;
  gameRunning: boolean = false;
  timer: number = 10;
  timerId: any;
  highScore: number = 0;
  
  constructor(private dialog: MatDialog, private recordService: RecordServiceService) {}

  ngOnInit(): void {
    this.highScore = this.recordService.getHighScore(); 
  }

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
        this.handleGameEnd();
      }
    }, 1000);
  }

  handleGameEnd(): void {
    if (this.clickCount > this.highScore) {
      this.recordService.setHighScore(this.clickCount); 
      this.highScore = this.clickCount; 
      this.showVictoryDialog(); 
    } else {
      this.showLossDialog();
    }
  }

  showVictoryDialog(): void {
    this.dialog.open(RecordDialogComponent, {
      width: '300px',
      disableClose: true,
      data: {
        clickCount: this.clickCount,
        highScore: this.highScore
      },
    });
  }

  showLossDialog(): void {
    this.dialog.open(DialogDerrotaComponent, {
      width: '300px',
      disableClose: true,
      data: {
        palabra: 'Desconocida' 
      },
    });
  }
}