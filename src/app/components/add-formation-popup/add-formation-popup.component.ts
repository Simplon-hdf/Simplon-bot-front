import { Component, Output, EventEmitter } from '@angular/core';
import { FormationModel, PersonModel } from '../../models/formation-model';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormationService } from '../../services/formation.service';
import { FormationsComponent } from '../formations/formations.component';

@Component({
  selector: 'app-add-formation-popup',
  templateUrl: './add-formation-popup.component.html',
  styleUrls: ['./add-formation-popup.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, FormationsComponent],
})
export class AddFormationPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() addFormation = new EventEmitter<FormationModel>();

  step = 1;
  formation: FormationModel = {
    id: 0,
    name: '',
    status: 'en cours',
    type: 'dev inté',
    place: '',
    former_1: {} as PersonModel,
    former_2: {} as PersonModel,
    caps: {} as PersonModel,
    start_date: '',
    end_date: '',
    charge_admin: {} as PersonModel,
    responsable_campus: {} as PersonModel,
    responsable_pedagogique: {} as PersonModel,
  };
  people: PersonModel[] = [];

  constructor(private formationService: FormationService) {
    this.people = this.formationService.getPeople();
  }
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
      status: 'en cours',
      type: 'dev inté',
      place: '',
      former_1: {} as PersonModel,
      former_2: {} as PersonModel,
      caps: {} as PersonModel,
      start_date: '',
      end_date: '',
      charge_admin: {} as PersonModel,
      responsable_campus: {} as PersonModel,
      responsable_pedagogique: {} as PersonModel,
    };
  }

  log() {
    console.log(this.people);
  }
}
