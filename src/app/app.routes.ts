import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-auth/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RegisterAuthComponent } from './components/register-auth/register-auth.component';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import('./components/login-auth/login.component').then(
            (m) => m.LoginComponent,
        ),
    },
    {
        path: "home",
        loadComponent: () => import('./components/home/home.component').then(
            (m) => m.HomeComponent,
        ),
    },
    {
        path: "aboutus",
        loadComponent: () => import('./components/aboutus/aboutus.component').then(
            (m) => m.AboutusComponent,
        ),
    },
    {
        path: "register",
        loadComponent: () => import('./components/register-auth/register-auth.component').then(
            (m) => m.RegisterAuthComponent,
        ),
    },
    
];
