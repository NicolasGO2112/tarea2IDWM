import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isSending = false;
  isSent = false;

  sendMessage() {
    // Mostrar "Enviando..." y ocultar el mensaje de "Enviado"
    this.isSending = true;
    this.isSent = false;

    // Simulamos un retraso de 2 segundos para enviar el mensaje
    setTimeout(() => {
      this.isSending = false; // Ocultar "Enviando..."
      this.isSent = true; // Mostrar "Enviado"

      // Después de 3 segundos, desvanecer el mensaje de "Enviado"
      setTimeout(() => {
        this.isSent = false;
      }, 3000); // Tiempo en milisegundos
    }, 2000); // Tiempo en milisegundos (simula el retraso del envío)
  }
}
