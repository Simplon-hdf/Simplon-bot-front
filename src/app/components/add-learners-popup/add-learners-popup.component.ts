import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-learners-popup',
  standalone: true,
  imports: [],
  templateUrl: './add-learners-popup.component.html',
  styleUrl: './add-learners-popup.component.scss',
})
export class AddLearnersPopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  onClosePopupClick() {
    this.closePopup.emit();
  }

  //Steps to add apprenants via csv file :
  //Upload csv in popup
  //Retrieve CSV
  //Read it and turn it into an array of apprenantModel
  //Send it to DB
}
