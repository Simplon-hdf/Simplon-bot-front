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
  private _learner!: ILearner;
  @Output() closePopup = new EventEmitter<void>();
  @Output() finishClick = new EventEmitter<ILearner[]>();
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

  onFormSubmit() {
    this.formSubmitted.emit(this.learner);
    this.closePopup.emit();
  }

  public onClosePopupClick() {
    this.closePopup.emit();
  }
}
