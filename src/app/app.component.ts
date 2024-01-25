import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterOutlet],
  template: `
    <app-navbar />
    <div class="max-w-[500px] mx-auto my-10 px-4">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = 'voting-app';
}
