import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LearnerModel } from '../../../../models/learner-model';

@Component({
  selector: 'app-add-learners-popup-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-learners-popup-form.component.html',
  styleUrl: './add-learners-popup-form.component.scss',
})
export class AddLearnersPopupFormComponent {
  private _firstName = '';
  private _lastName = '';
  private _mail = '';
  private _phoneNumber = '';
  private _learner: LearnerModel = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    formationId: undefined,
  };

  @Output() formSubmitted = new EventEmitter<LearnerModel>();

  //#region accessors
  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get mail(): string {
    return this._mail;
  }

  public set mail(value: string) {
    this._mail = value;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  public get learner(): LearnerModel {
    return this._learner;
  }

  public set learner(value: LearnerModel) {
    this._learner = value;
  }
  //#endregion

  onFormSubmit() {
    this.learner.firstName = this.firstName;
    this.learner.lastName = this.lastName;
    this.learner.mail = this.mail;
    this.learner.phoneNumber = this.phoneNumber;
    this.formSubmitted.emit(this.learner);
  }
}
