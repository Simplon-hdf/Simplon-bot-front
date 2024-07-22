import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILearner } from '../../Interfaces/ILearner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-learner-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-learner-popup.component.html',
  styleUrl: './edit-learner-popup.component.scss',
})
export class EditLearnerPopupComponent {
  /**
   * The learner to edit. Set by an Input
   */
  private _learner!: ILearner;

  /**
   * Event is fired when the close button is clicked
   */
  @Output() closePopup = new EventEmitter<void>();

  /**
   * Event is fired when the "Terminer" button is clicked
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
   * - Emit a `formSubmitted` event with `this.learner` as an argument
   * - Emit a `closePopup` event
   */
  public onFormSubmit() {
    this.formSubmitted.emit(this.learner);
    this.closePopup.emit();
  }

  /**
   * Emit a `closePopup` event
   */
  public onClosePopupClick() {
    this.closePopup.emit();
  }
}
