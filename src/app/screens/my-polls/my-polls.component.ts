import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-polls',
  standalone: true,
  imports: [CommonModule],
  template: `<p>my-polls works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPollsComponent {}
