import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss',
})
export class Step1Component {
  @Output() nextStep = new EventEmitter<void>();
  formationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formationForm = this.fb.group({
      name: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      type: ['', Validators.required],
      place: ['', Validators.required],
    });
  }

  private goToNextStep() {
    if (this.isStep1Valid()) {
      this.nextStep.emit();
    } else {
      this.markStep1AsTouched();
    }
  }

  private markStep1AsTouched() {
    const fieldsToTouch = ['name', 'start_date', 'end_date', 'type', 'place'];
    fieldsToTouch.forEach((field) => {
      const control = this.formationForm.get(field);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  private isStep1Valid(): boolean {
    const fieldsToCheck = ['name', 'start_date', 'end_date', 'type', 'place'];

    return (
      fieldsToCheck.every((field) => this.isFieldValid(field)) &&
      !this.formationForm.hasError('dateRange')
    );
  }

  private isFieldValid(fieldName: string): boolean {
    const field = this.formationForm.get(fieldName);
    return field ? field.valid : false;
  }

  private markAllAsTouched() {
    this.formationForm.markAllAsTouched();
  }
}
