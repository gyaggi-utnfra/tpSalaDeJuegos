import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
        path: "ahorcado",
        loadComponent: () => import('./components/juegos/ahorcado/ahorcado.component').then(
            (m) => m.AhorcadoComponent,
        ),
        canActivate: [AuthGuard],  
    },
    {
        path: "mayormenor",
        loadComponent: () => import('./components/juegos/mayormenor/mayormenor.component').then(
            (m) => m.MayormenorComponent,
        ),
        canActivate: [AuthGuard],     
     },
    {
        path: "preguntados",
        loadComponent: () => import('./components/juegos/preguntados/preguntados.component').then(
            (m) => m.PreguntadosComponent,
        ),
        canActivate: [AuthGuard],  
    },
    {
        path: "mouse",
        loadComponent: () => import('./components/juegos/mouse/mouse.component').then(
            (m) => m.MouseComponent,
        ),
        canActivate: [AuthGuard],  
    },
    {
        path: "ranking",
        loadComponent: () => import('./components/ranking/ranking.component').then(
          (m) => m.RankingComponent,
        ),
        canActivate: [AuthGuard],
    },    
    {
        path: "chat",
        loadComponent: () => import('./components/chat/chat.component').then(
            (m) => m.ChatComponent,
        ),
        canActivate: [AuthGuard],  
    },    
    {
        path: "encuesta",
        loadComponent: () => import('./components/encuesta/encuesta.component').then(
            (m) => m.EncuestaComponent,
        ),
        canActivate: [AuthGuard], 
    },   
    {
        path: " ",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "home",
        pathMatch: "full",
    },
];
