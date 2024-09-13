import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({  apiKey: "AIzaSyBYmNNyJmQijf1UVZPxYgCULMqivYkUBac",
    authDomain: "saladejuegos-d3933.firebaseapp.com",
    projectId: "saladejuegos-d3933",
    storageBucket: "saladejuegos-d3933.appspot.com",
    messagingSenderId: "592924014661",
    appId: "1:592924014661:web:1518a7b601bd4003930b2c"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(),]
};