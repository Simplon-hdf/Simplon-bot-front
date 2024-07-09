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
    status: 'en cours',
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
        name: ['', Validators.required],
        start_date: ['', Validators.required],
        end_date: ['', Validators.required],
        type: ['', Validators.required],
        place: ['', Validators.required],
        status: ['en cours', Validators.required],
        caps: [null, Validators.required],
        former_1: [null, Validators.required],
        former_2: [null, Validators.required],
        charge_admin: [null, Validators.required],
        responsable_campus: [null, Validators.required],
        responsable_pedagogique: [null, Validators.required],
      },
      { validators: dateRangeValidator() }
    );
  }
  nextStep() {
    if (this.step === 1 && this.isStep1Valid()) {
      this.step++;
    } else {
      this.markStep1AsTouched();
    }
  }
  private isStep1Valid() {
    return (
      this.formationForm.get('name')?.valid &&
      this.formationForm.get('start_date')?.valid &&
      this.formationForm.get('end_date')?.valid &&
      this.formationForm.get('type')?.valid &&
      this.formationForm.get('place')?.valid &&
      !this.formationForm.hasError('dateRange')
    );
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
    console.log(this.step);
  }

  submitFormation() {
    if (this.formationForm.valid) {
      this.addFormation.emit(this.formationForm.value);
      this.closePopup.emit();
      this.resetForm();
    } else {
      this.markAllAsTouched();
    }
  }

  private markStep1AsTouched() {
    this.formationForm.get('name')?.markAsTouched();
    this.formationForm.get('start_date')?.markAsTouched();
    this.formationForm.get('end_date')?.markAsTouched();
    this.formationForm.get('type')?.markAsTouched();
    this.formationForm.get('place')?.markAsTouched();
  }

  resetForm() {
    this.step = 1;
    this.formationForm.reset({
      status: 'en cours',
    });
  }

  resetFormation() {
    this.step = 1;
    this.formation = {
      id: 0,
      name: '',
      status: 'en cours',
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
