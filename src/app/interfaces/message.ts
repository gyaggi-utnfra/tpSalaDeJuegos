export interface Message {
    user: string;
    text: string;
    timestamp: Date; // Asegúrate de que el tipo Date se maneje adecuadamente en Firestore
    isUserMessage: boolean; // Para identificar si el mensaje es del usuario actual
}
