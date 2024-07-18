import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { PersonModel } from '../../models/person-model';

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
