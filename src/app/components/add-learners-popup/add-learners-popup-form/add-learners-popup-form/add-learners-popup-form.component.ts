import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  /**
   * Learner to be submitted via the popup form
   * @defaultValue IDs are undefined and other fields are empty strings
   */
  private _learner: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    promoId: undefined,
  };

  /**
   * This event is fired when the "Terminer" button is clicked in the form
   * @type `EventEmitter<ILearner>`
   */
  @Output() formSubmitted = new EventEmitter<ILearner>();

  //#region ACCESSORS
  @Input()
  public get learner(): ILearner {
    return this._learner;
  }

  public set learner(value: ILearner) {
    this._learner = value;
  }
  //#endregion

  /**
   * Emit an event with `this.formSubmitted` event
   * `formSubmitted` emits `this.learner` as an argument
   * @returns void
   */
  public onFormSubmit(): void {
    this.formSubmitted.emit(this.learner);
  }
}
