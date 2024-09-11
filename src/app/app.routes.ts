import { Routes } from '@angular/router';


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
        path: "quien-soy",
        loadComponent: () => import('./components/quien-soy/quien-soy.component').then(
            (m) => m.QuienSoyComponent,
        ),
    },
    {
        path: "register",
        loadComponent: () => import('./components/register-auth/register-auth.component').then(
            (m) => m.RegisterAuthComponent,
        ),
    },
    {
        path: " ",
        redirectTo: "login",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "login",
        pathMatch: "full",
    },
    
];
