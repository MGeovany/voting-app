import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
