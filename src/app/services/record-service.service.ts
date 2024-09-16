import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordServiceService {

  private highScore: number = 0;

  getHighScore(): number {
    return this.highScore;
  }

  setHighScore(score: number): void {
    if (score > this.highScore) {
      this.highScore = score;
    }
  }
}
