import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { parse } from '../../../../node_modules/csv-parse/dist/esm/sync';
import { ILearner } from '../../Interfaces/ILearner';
import { MapperService } from '../../services/mapper.service';
import { AddLearnersPopupFormComponent } from './add-learners-popup-form/add-learners-popup-form/add-learners-popup-form.component';
import { AddLearnersPopupMenuComponent } from './add-learners-popup-menu/add-learners-popup-menu.component';
import { LearnersTableComponent } from '../learners-table/learners-table.component';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-add-learners-popup',
  standalone: true,
  imports: [
    AddLearnersPopupFormComponent,
    AddLearnersPopupMenuComponent,
    LearnersTableComponent,
  ],
  providers: [MapperService],
  templateUrl: './add-learners-popup.component.html',
  styleUrl: './add-learners-popup.component.scss',
})
export class AddLearnersPopupComponent {
  private _learners: ILearner[] = [];
  private _learner: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    formationId: undefined,
  };
  private _isAddingLearners = false;
  @Output() closePopup = new EventEmitter<void>();
  @Output() finishClick = new EventEmitter<ILearner[]>();

  //#region ACCESSORS
  @Input()
  public get isAddingLearners() {
    return this._isAddingLearners;
  }

  public set isAddingLearners(value) {
    this._isAddingLearners = value;
  }

  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
  }

  @Input()
  public get learner(): ILearner {
    return this._learner;
  }

  public set learner(value: ILearner) {
    this._learner = value;
  }
  //#endregion

  public onClosePopupClick() {
    this.closePopup.emit();
  }

  public addLearner(learner: ILearner) {
    this.isAddingLearners = false;
    if (!this.learners.includes(learner)) {
      this.learners.push(learner);
    }
  }

  public onAddClick() {
    this.learner = {
      id: undefined,
      firstName: '',
      lastName: '',
      mail: '',
      phoneNumber: '',
      formationId: undefined,
    };
    this.isAddingLearners = true;
  }

  public onEditClick(learner: ILearner) {
    this.isAddingLearners = true;
    this.learner = learner!;
  }

  public onFinishClick() {
    //This function should send an array of learners to the API and add them to the database
    this.finishClick.emit(this.learners);
    this.closePopup.emit();
  }

  public onAddedCsvFile(learnersFromCsv: ILearner[]) {
    this.learners = learnersFromCsv;
  }
}
