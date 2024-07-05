import { Component, Output, EventEmitter } from '@angular/core';
import { FormationModel } from '../../models/formation-model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-formation-popup',
  templateUrl: './add-formation-popup.component.html',
  styleUrls: ['./add-formation-popup.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class AddFormationPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() addFormation = new EventEmitter<FormationModel>();

  step = 1;
  formation: FormationModel = {
    id: 0,
    name: '',
    start_date: '',
    end_date: '',
    place: '',
    caps: '',
    status: 'en cours',
  };

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  submitFormation() {
    this.addFormation.emit(this.formation);
    this.closePopup.emit();
    this.resetFormation();
  }

  resetFormation() {
    this.step = 1;
    this.formation = {
      id: 0,
      name: '',
      start_date: '',
      end_date: '',
      place: '',
      caps: '',
      status: 'en cours',
    };
  }
}
