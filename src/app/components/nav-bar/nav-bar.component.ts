import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Event, Router, NavigationStart } from '@angular/router';
import { FirebaseAuthService} from '../../services/firebase-auth.service';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  
  userObs$!: Observable<User | null>;
  userValue!: User | null;

  private authservice = inject(FirebaseAuthService);

  constructor(private router: Router)
  {
    this.userObs$ = this.authservice.getUser();
    this.userObs$.subscribe((response) => {
      this.userValue = response;
    })
  }

  async logOut(): Promise<void>{
    try{
      await this.authservice.logOut();
    }catch(e){
      console.log(e);
    }
    this.router.navigateByUrl('/home');
    
  }

}
