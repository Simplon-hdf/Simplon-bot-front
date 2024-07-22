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
  /**
   * An array of `ILearner` that will be send to the API to be added in the database
   */
  private _learners: ILearner[] = [];

  /**
   * Defines the `ILearner` to be edited when the edit button is clicked
   * @defaultValue IDs are undefined and oher fields are empty strings
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
   * Define the current action of the popup. If `true` the popup is currently adding a learner via a form
   */
  private _isAddingLearners = false;

  /**
   * This event is fired when the X in the corner of the popup is clicked
   */
  @Output() closePopup = new EventEmitter<void>();

  /**
   * This event is fired when the "Terminer" button is clicked
   */
  @Output() formSubmitted = new EventEmitter<ILearner[]>();

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

  /**
   * Emit an event with `closePopup` event
   */
  public onClosePopupClick() {
    this.closePopup.emit();
  }

  /**
   * Set `this.isAddingLearners` to `false`
   * If `learner` will be push in `learners` if not present
   * @param learner type: `ILearner`
   */
  public addLearner(learner: ILearner) {
    this.isAddingLearners = false;
    if (!this.learners.includes(learner)) {
      this.learners.push(learner);
    }
  }

  /**
   * - Set `this.isAddingLearners` to `true`
   * - Set `this.learner` to its default value.
   * This is done to prevent the form to be filled with the information of a previously eddited learner
   */
  public onAddClick() {
    this.learner = {
      id: undefined,
      firstName: '',
      lastName: '',
      mail: '',
      phoneNumber: '',
      promoId: undefined,
    };
    this.isAddingLearners = true;
  }

  /**
   * - Set `this.isAddingLearners` to `true`
   * - Set `this.learner` to `learner`
   * @param learner type: `ILearner`
   */
  public onEditClick(learner: ILearner) {
    this.isAddingLearners = true;
    this.learner = learner!;
  }

  /**
   * - Emit an event with `formSubmitted` event. Takes `this.learners` as a parameter
   * - Emit an event with `closePopup` event
   */
  public onFormSubmitted() {
    //This function should send an array of learners to the API and add them to the database
    this.formSubmitted.emit(this.learners);
    this.closePopup.emit();
  }

  /**
   * Set `this.learners` to `learnersFromCsv`
   * @param learnersFromCsv type: `ILearner[]`
   * @returns void
   */
  public onAddedCsvFile(learnersFromCsv: ILearner[]): void {
    this.learners = learnersFromCsv;
  }
}
