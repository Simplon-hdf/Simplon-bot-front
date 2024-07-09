import { Component, Input } from '@angular/core';
import { PersonModel } from '../../models/formation-model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.scss',
})
export class StaffCardComponent {
  @Input() person: PersonModel | null = null;
  @Input() role = '';
}
