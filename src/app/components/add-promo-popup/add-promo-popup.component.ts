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
    // Initialize the list of people from the service
    this.people = this.promoService.getPeople();
    // Initialize the form with subgroups 'basicInfo' and 'staffs'
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
    // Update the status based on the dates
    this.updateStatus();
  }

  /**
   * Move to the next step if the current step is valid.
   * Marks the fields of the current step as touched if it is not valid.
   */
  public goToNextStep() {
    if (this.isCurrentStepValid()) {
      this.step++;
    } else {
      this.markCurrentStepAsTouched();
      console.log('Not valid');
    }
  }

  /**
   * Checks if the current step of the form is valid.
   * @returns {boolean} - True if the current step is valid, false otherwise.
   */
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

  /**
   * Marks all fields of the current step as touched.
   */
  private markCurrentStepAsTouched() {
    const steps = ['basicInfo', 'staffs'];
    const currentStep = steps[this.step - 1];
    (this.promoForm.get(currentStep) as FormGroup).markAllAsTouched();
  }

  /**
   * Go to the previous step.
   */
  public goToPreviousStep() {
    this.step--;
  }

  /**
   * Submit the form if valid, update the status, and emit the necessary events.
   * If the form is not valid, marks all fields as touched.
   */
  public submitPromo() {
    if (this.promoForm.valid) {
      this.updateStatus();
      this.addPromo.emit(this.promoForm.value);
      this.closePopup.emit();
      this.resetForm();
    } else {
      this.markAllAsTouched();
    }
  }

  /**
   * Update the status of the promotion based on the start and end dates.
   */
  private updateStatus() {
    const startDate = new Date(
      this.promoForm.get('basicInfo.start_date')?.value
    );
    const endDate = new Date(this.promoForm.get('basicInfo.end_date')?.value);
    const now = new Date();

    if (endDate < now) {
      this.promoForm.get('basicInfo.status')?.setValue('terminated');
    } else if (startDate > now) {
      this.promoForm.get('basicInfo.status')?.setValue('upcoming');
    } else {
      this.promoForm.get('basicInfo.status')?.setValue('ongoing');
    }
  }

  /**
   * Reset the form and go back to the first step.
   */
  private resetForm() {
    this.step = 1;
    this.promoForm.reset();
  }

  /**
   * Marks all fields of the form as touched.
   */
  private markAllAsTouched() {
    this.promoForm.markAllAsTouched();
  }
}
