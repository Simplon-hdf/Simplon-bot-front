import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-step-display-bar',
  standalone: true,
  imports: [],
  templateUrl: './active-step-display-bar.component.html',
  styleUrl: './active-step-display-bar.component.scss',
})
export class ActiveStepDisplayBarComponent {
  @Input() step = 1;
}
