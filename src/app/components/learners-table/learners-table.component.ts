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
  private _learners: ILearner[] = [];
  @Output() editButtonClick = new EventEmitter<boolean>();

  @Input()
  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
  }

  public deleteLearner(learner: ILearner) {
    const learnerIndex = this.learners.indexOf(learner);
    this.learners.splice(learnerIndex, 1);
  }

  public editLearner() {
    this.editButtonClick.emit(true);
  }
}
