import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILearner } from '../../Interfaces/ILearner';
import { AddLearnersPopupFormComponent } from '../add-learners-popup/add-learners-popup-form/add-learners-popup-form/add-learners-popup-form.component';
import { AddLearnersPopupComponent } from '../add-learners-popup/add-learners-popup.component';

@Component({
  selector: 'app-learners-table',
  standalone: true,
  imports: [AddLearnersPopupFormComponent, AddLearnersPopupComponent],
  templateUrl: './learners-table.component.html',
  styleUrl: './learners-table.component.scss',
})
export class LearnersTableComponent {
  /**
   * An array of `ILearner`
   * @defaultValue is an empty Array
   */
  private _learners: ILearner[] = [];

  /**
   * Emit an event when the eddit button is clicked
   */
  @Output() editButtonClick = new EventEmitter<ILearner>();

  //#region  ACCESSORS
  @Input()
  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
  }
  //#endregion

  /**
   * Remove the `learner` pass as argument from `learners`
   * @param learner type `ILearner`
   * @returns void
   */
  public deleteLearner(learner: ILearner): void {
    const learnerIndex = this.learners.indexOf(learner);
    this.learners.splice(learnerIndex, 1);
  }

  /**
   * Emit an editButtonClick event with `learner` as argument
   * @param learner type `ILearner`
   */
  public editLearner(learner: ILearner): void {
    this.editButtonClick.emit(learner);
  }
}
