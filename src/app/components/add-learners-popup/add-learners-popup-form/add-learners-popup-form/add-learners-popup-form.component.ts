import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ILearner } from '../../../../Interfaces/ILearner';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-learners-popup-form',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './add-learners-popup-form.component.html',
  styleUrl: './add-learners-popup-form.component.scss',
})
export class AddLearnersPopupFormComponent {
  private _learner: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    formationId: undefined,
  };

  @Output() formSubmitted = new EventEmitter<ILearner>();

  //#region ACCESSORS
  public get learner(): ILearner {
    return this._learner;
  }

  public set learner(value: ILearner) {
    this._learner = value;
  }
  //#endregion

  onFormSubmit() {
    this.formSubmitted.emit(this.learner);
  }
}
