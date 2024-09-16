import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Firestore, collection, addDoc, CollectionReference } from '@angular/fire/firestore';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { User } from '@firebase/auth';
import { inject } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class EncuestaComponent implements OnInit {
  encuestaForm: FormGroup;
  private firestore: Firestore = inject(Firestore);
  private authService: FirebaseAuthService = inject(FirebaseAuthService);
  user: User | null = null;

  constructor(private fb: FormBuilder) {
    this.encuestaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required]
    });

    this.authService.getUser().subscribe((user: User | null) => {
      this.user = user;
    });
  }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    if (this.encuestaForm.valid) {
      if (this.user) {
        const userId = this.user.uid; // Usar ID de usuario para almacenar datos
        const encuestaCollection: CollectionReference = collection(this.firestore, 'encuestas');
        
        await addDoc(encuestaCollection, {
          userId: userId,
          ...this.encuestaForm.value,
          timestamp: new Date()
        });

        console.log('Encuesta guardada en Firebase');
        this.encuestaForm.reset();
      } else {
        console.error('No se pudo identificar al usuario');
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}