import { Component } from '@angular/core';
import { FormationService } from '../../services/formation.service';
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
  isVisible = false;
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

  constructor(private formationService: FormationService) {}

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
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

  nextStep() {
    this.step = 2;
  }

  prevStep() {
    this.step = 1;
  }

  onSubmit() {
    this.formationService.addFormation(this.formation);
    this.hide();
  }
}
