import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '@components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <p>
      <br />
      En este tutorial de Angular 17, desde la instalación, exploraremos cada
      aspecto del desarrollo con este framework. Desde la configuración inicial
      con Node.js y Angular CLI hasta la creación de componentes, directivas,
      eventos y comunicación entre componentes. Además, abordaremos temas
      avanzados como rendimiento, suscripciones a eventos, y soluciones para
      problemas comunes. … 119 comentarios Marlon Geovany Agrega un comentario…
      h hace 1 mes Yo, como desarrollador de Angular. Estoy agradecido con por
      hacer este vídeo. Y a ver si así se aprecia más Angular. Responder hace 1
      mes este video me la cabeza para una idea de seria donde hagas el front y
      trabajes en con otro dev de backend como , y armen producto sencillo
      mostrando un poco mas la de proyecto. de ahi en mas gracias por el content
      siempre! 29 Responder
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
