import { Component, EventEmitter, Output } from '@angular/core';
// import { parse } from '../../../../node_modules/csv-parse/dist/esm/sync';
import { ILearner } from '../../models/ILearner';
import { MapperService } from '../../services/mapper.service';
import { AddLearnersPopupFormComponent } from './add-learners-popup-form/add-learners-popup-form/add-learners-popup-form.component';
import { AddLearnersPopupMenuComponent } from './add-learners-popup-menu/add-learners-popup-menu.component';
import { LearnersTableComponent } from '../learners-table/learners-table.component';

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
  private _learners: ILearner[] = [
    // {
    //   id: undefined,
    //   firstName: 'jean',
    //   lastName: 'pierre',
    //   mail: 'pierre@mail.com',
    //   phoneNumber: '06 01 02 03 04',
    //   formationId: undefined,
    // },
  ];
  private _isAddingLearners = false;
  @Output() closePopup = new EventEmitter<void>();
  @Output() finishClick = new EventEmitter<ILearner[]>();

  //#region ACCESSORS
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
  //#endregion

  public onClosePopupClick() {
    this.closePopup.emit();
  }

  public addLearner(learner: ILearner) {
    console.log(learner);
    console.log(this.learners);
    this.isAddingLearners = false;
    this.learners?.push(learner);
  }

  public onAddClick() {
    this.isAddingLearners = true;
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
