import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { collection, CollectionReference, Firestore, addDoc, query, orderBy, onSnapshot } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Message } from '../../interfaces/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { Timestamp } from '@firebase/firestore';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { User } from '@firebase/auth';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  
  private firestore: Firestore = inject(Firestore);
  private authService: FirebaseAuthService = inject(FirebaseAuthService);
  messages$: Observable<Message[]> = of([]);
  newMessage: string = '';
  user: string = '';

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor() {
    this.authService.getUser().subscribe((user: User | null) => {
      this.user = user ? user.email || 'User' : 'Guest';
      this.loadMessages();
    });
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  private loadMessages() {
    const messagesCollection: CollectionReference = collection(this.firestore, 'messages');
    const q = query(messagesCollection, orderBy('timestamp'));

    onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => {
        const data = doc.data() as Message;
        return {
          ...data,
          timestamp: data.timestamp instanceof Timestamp ? data.timestamp.toDate() : data.timestamp,
          isUserMessage: data.user === this.user // Asegura que el mensaje se clasifique correctamente
        };
      });
      this.messages$ = of(messages);
      setTimeout(() => this.scrollToBottom(), 0); // Asegura que el scroll al final funcione
    });
  }

  async sendMessage() {
    if (this.newMessage.trim()) {
      const messagesCollection: CollectionReference = collection(this.firestore, 'messages');
      await addDoc(messagesCollection, {
        text: this.newMessage,
        user: this.user,
        timestamp: new Date(),
        isUserMessage: true
      });
      this.newMessage = '';
    }
  }

  formatTimestamp(timestamp: Date): string {
    return formatDate(timestamp, 'dd/MM/yyyy HH:mm', 'es-ES');
  }

  scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }
}