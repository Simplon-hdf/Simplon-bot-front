import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { IPerson } from '../../Interfaces/IPerson';

@Component({
  selector: 'app-staff-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.scss',
})
export class StaffCardComponent {
  @Input() person: IPerson | null = null;
  @Input() role = '';
}
