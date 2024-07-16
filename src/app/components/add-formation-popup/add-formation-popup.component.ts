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
import { Step1Component } from '../popup-promo/step-1/step-1.component';
import { Step2Component } from '../popup-promo/step-2/step-2.component';
import { dateRangeValidator } from '../../validators/date-range.validator';

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
    Step2Component,
  ],
})
export class AddFormationPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() addFormation = new EventEmitter<FormationModel>();

  step = 1;
  maxSteps = 2;
  formationForm: FormGroup;
  people: PersonModel[] = [];

  constructor(
    private formationService: FormationService,
    private fb: FormBuilder
  ) {
    this.people = this.formationService.getPeople();
    this.formationForm = this.fb.group(
      {
        basicInfo: this.fb.group({
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
          learners: [[]],
        }),
        staffs: this.fb.group({
          caps: [null, Validators.required],
          former_1: [null, Validators.required],
          former_2: [null, Validators.required],
          charge_admin: [null, Validators.required],
          responsable_campus: [null, Validators.required],
          responsable_pedagogique: [null, Validators.required],
        }),
      },
      { validators: dateRangeValidator() }
    );
    this.updateStatus();
  }

  goToNextStep() {
    if (this.isCurrentStepValid()) {
      console.log('Valid');
      this.step++;
    } else {
      this.markCurrentStepAsTouched();
      console.log('Not valid');
    }
  }

  private isCurrentStepValid(): boolean {
    const steps = ['basicInfo', 'staffs'];
    const currentStep = steps[this.step - 1];
    console.log(this.formationForm.get(currentStep)!.valid);
    if (currentStep === 'basicInfo') {
      return (
        this.formationForm.get(currentStep)!.valid &&
        !this.formationForm.hasError('dateRange')
      );
    }
    return this.formationForm.get(currentStep)!.valid;
  }

  private markCurrentStepAsTouched() {
    const steps = ['basicInfo', 'staffs'];
    const currentStep = steps[this.step - 1];
    (this.formationForm.get(currentStep) as FormGroup).markAllAsTouched();
    console.log('marked');
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
    const startDate = new Date(
      this.formationForm.get('basicInfo.start_date')?.value
    );
    const endDate = new Date(
      this.formationForm.get('basicInfo.end_date')?.value
    );
    const now = new Date();

    if (endDate < now) {
      this.formationForm.get('basicInfo.status')?.setValue('terminé');
    } else if (startDate > now) {
      this.formationForm.get('basicInfo.status')?.setValue('à venir');
    } else {
      this.formationForm.get('basicInfo.status')?.setValue('en cours');
    }
  }

  resetForm() {
    this.step = 1;
    this.formationForm.reset();
  }

  private markAllAsTouched() {
    this.formationForm.markAllAsTouched();
  }
}
