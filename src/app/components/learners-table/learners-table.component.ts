import { Component, Input } from '@angular/core';
import { LearnerModel } from '../../models/learner-model';

@Component({
  selector: 'app-learners-table',
  standalone: true,
  imports: [],
  templateUrl: './learners-table.component.html',
  styleUrl: './learners-table.component.scss',
})
export class LearnersTableComponent {
  private _learners: LearnerModel[] = [];

  @Input()
  public get learners(): LearnerModel[] {
    return this._learners;
  }

  public set learners(value: LearnerModel[]) {
    this._learners = value;
  }
}
