import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { PromoService } from '../../services/promo.service';
import { PromosComponent } from '../promos/promos.component';
import { ActiveStepDisplayBarComponent } from '../active-step-display-bar/active-step-display-bar.component';
import { Step1Component } from '../popup-promo/step-1/step-1.component';
import { Step2Component } from '../popup-promo/step-2/step-2.component';
import { dateRangeValidator } from '../../validators/date-range.validator';
import { IPromo } from '../../Interfaces/IPromo';
import { IPerson } from '../../Interfaces/IPerson';

@Component({
  selector: 'app-add-promo-popup',
  templateUrl: './add-promo-popup.component.html',
  styleUrls: ['./add-promo-popup.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    PromosComponent,
    ActiveStepDisplayBarComponent,
    CommonModule,
    Step1Component,
    Step2Component,
  ],
})
export class AddPromoPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() addPromo = new EventEmitter<IPromo>();

  step = 1;
  maxSteps = 2;
  promoForm: FormGroup;
  people: IPerson[] = [];

  constructor(
    private promoService: PromoService,
    private fb: FormBuilder
  ) {
    this.people = this.promoService.getPeople();
    this.promoForm = this.fb.group(
      {
        basicInfo: this.fb.group({
          name: [
            '',
            [Validators.required, Validators.pattern(/^[a-zA-Z0-9 _éè]+$/)],
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
          cdp: [null, Validators.required],
          former_1: [null, Validators.required],
          former_2: [null, Validators.required],
          admin_head: [null, Validators.required],
          campus_manager: [null, Validators.required],
          pedagogical_manager: [null, Validators.required],
        }),
      },
      { validators: dateRangeValidator() }
    );
    this.updateStatus();
  }

  goToNextStep() {
    if (this.isCurrentStepValid()) {
      this.step++;
    } else {
      this.markCurrentStepAsTouched();
      console.log('Not valid');
    }
  }

  private isCurrentStepValid(): boolean {
    const steps = ['basicInfo', 'staffs'];
    const currentStep = steps[this.step - 1];
    if (currentStep === 'basicInfo') {
      return (
        this.promoForm.get(currentStep)!.valid &&
        !this.promoForm.hasError('dateRange')
      );
    }
    return this.promoForm.get(currentStep)!.valid;
  }

  private markCurrentStepAsTouched() {
    const steps = ['basicInfo', 'staffs'];
    const currentStep = steps[this.step - 1];
    (this.promoForm.get(currentStep) as FormGroup).markAllAsTouched();
  }

  goToPreviousStep() {
    this.step--;
  }

  submitPromo() {
    if (this.promoForm.valid) {
      this.updateStatus();
      this.addPromo.emit(this.promoForm.value);
      this.closePopup.emit();
      this.resetForm();
    } else {
      this.markAllAsTouched();
    }
  }

  updateStatus() {
    const startDate = new Date(
      this.promoForm.get('basicInfo.start_date')?.value
    );
    const endDate = new Date(this.promoForm.get('basicInfo.end_date')?.value);
    const now = new Date();

    if (endDate < now) {
      this.promoForm.get('basicInfo.status')?.setValue('terminé');
    } else if (startDate > now) {
      this.promoForm.get('basicInfo.status')?.setValue('à venir');
    } else {
      this.promoForm.get('basicInfo.status')?.setValue('en cours');
    }
  }

  resetForm() {
    this.step = 1;
    this.promoForm.reset();
  }

  private markAllAsTouched() {
    this.promoForm.markAllAsTouched();
  }
}
