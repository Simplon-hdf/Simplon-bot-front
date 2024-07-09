import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateRangeValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const startDate = form.get('start_date')?.value;
    const endDate = form.get('end_date')?.value;

    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return { dateRange: true };
    }
    return null;
  };
}
