import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NavBarComponent, ReactiveFormsModule, FormsModule, FirestoreModule]
})
export class AppComponent {
  title = 'tpSalaDeJuegos';
}