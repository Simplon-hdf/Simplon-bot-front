import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationModel, PersonModel } from '../../models/formation-model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormationService } from '../../services/formation.service';
import { FormationsComponent } from '../formations/formations.component';
import { StepperComponent } from '../stepper/stepper.component';
import { dateRangeValidator } from '../../date-range.validator';
import { Step1Component } from '../popup-promo/step-1/step-1.component';

@Component({
  selector: 'app-add-formation-popup',
  templateUrl: './add-formation-popup.component.html',
  styleUrls: ['./add-formation-popup.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    FormationsComponent,
    StepperComponent,
    CommonModule,
    Step1Component,
  ],
})
export class AddFormationPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() addFormation = new EventEmitter<FormationModel>();

  step = 1;
  maxSteps = 2;
  formationForm: FormGroup;
  formation: FormationModel = {
    id: 0,
    name: '',
    status: '',
    type: '',
    place: '',
    former_1: {} as PersonModel,
    former_2: {} as PersonModel,
    caps: {} as PersonModel,
    start_date: '',
    end_date: '',
    charge_admin: {} as PersonModel,
    responsable_campus: {} as PersonModel,
    responsable_pedagogique: {} as PersonModel,
    learners: [],
  };
  people: PersonModel[] = [];

  constructor(
    private formationService: FormationService,
    private fb: FormBuilder
  ) {
    this.people = this.formationService.getPeople();
    this.formationForm = this.fb.group(
      {
        name: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)],
        ],
        start_date: ['', Validators.required],
        end_date: ['', Validators.required],
        type: ['', Validators.required],
        place: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)],
        ],
        status: [''],
        caps: [null, Validators.required],
        former_1: [null, Validators.required],
        former_2: [null, Validators.required],
        charge_admin: [null, Validators.required],
        responsable_campus: [null, Validators.required],
        responsable_pedagogique: [null, Validators.required],
        learners: [[]],
      },
      { validators: dateRangeValidator() }
    );
    this.updateStatus();
  }
  goToNextStep() {
    this.step++;
  }

  goToPreviousStep() {
    this.step--;
  }

  submitFormation() {
    if (this.formationForm.valid) {
      this.updateStatus();
      this.addFormation.emit(this.formationForm.value);
      this.closePopup.emit();
      this.resetForm();
    } else {
      this.markAllAsTouched();
    }
  }

  updateStatus() {
    const startDate = new Date(this.formationForm.get('start_date')?.value);
    const endDate = new Date(this.formationForm.get('end_date')?.value);
    const now = new Date();

    if (endDate < now) {
      this.formationForm.get('status')?.setValue('terminé');
    } else if (startDate > now) {
      this.formationForm.get('status')?.setValue('à venir');
    } else {
      this.formationForm.get('status')?.setValue('en cours');
    }
  }

  resetForm() {
    this.step = 1;
    this.formationForm.reset();
  }

  resetFormation() {
    this.step = 1;
    this.formation = {
      id: 0,
      name: '',
      status: '',
      type: '',
      place: '',
      former_1: {} as PersonModel,
      former_2: {} as PersonModel,
      caps: {} as PersonModel,
      start_date: '',
      end_date: '',
      charge_admin: {} as PersonModel,
      responsable_campus: {} as PersonModel,
      responsable_pedagogique: {} as PersonModel,
      learners: [],
    };
  }

  private markAllAsTouched() {
    this.formationForm.markAllAsTouched();
  }
}
