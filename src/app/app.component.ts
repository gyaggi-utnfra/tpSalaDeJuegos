import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Event } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NavBarComponent]
})
export class AppComponent {
  title = 'tpSalaDeJuegos';
}
