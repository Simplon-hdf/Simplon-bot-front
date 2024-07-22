import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffCardComponent } from '../staff-card/staff-card.component';
import { AddLearnersPopupComponent } from '../add-learners-popup/add-learners-popup.component';
import { LearnersTableComponent } from '../learners-table/learners-table.component';
import { PromoService } from '../../services/promo.service';
import { ILearner } from '../../Interfaces/ILearner';
import { IPromo } from '../../Interfaces/IPromo';
import { EditLearnerPopupComponent } from '../edit-learner-popup/edit-learner-popup.component';

@Component({
  selector: 'app-promo-detail',
  standalone: true,
  imports: [
    NgIf,
    StaffCardComponent,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AddLearnersPopupComponent,
    LearnersTableComponent,
    EditLearnerPopupComponent,
  ],
  templateUrl: './promo-detail.component.html',
  styleUrl: './promo-detail.component.scss',
})
export class PromoDetailComponent implements OnInit {
  private _learners: ILearner[] = [];
  private _promo: IPromo | undefined;
  private _learner: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    formationId: undefined,
  };
  private _learnerToEdit: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    formationId: undefined,
  };
  private _isAddLearner = false;
  private _isEditLearner = false;

  //#region ACCESSORS

  public get promo(): IPromo | undefined {
    return this._promo;
  }

  public set promo(value: IPromo | undefined) {
    this._promo = value;
  }

  public get isAddLearner() {
    return this._isAddLearner;
  }

  public set isAddLearner(value) {
    this._isAddLearner = value;
  }

  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
  }

  public get isEditLearner() {
    return this._isEditLearner;
  }

  public set isEditLearner(value) {
    this._isEditLearner = value;
  }

  public get learner(): ILearner {
    return this._learner;
  }

  public set learner(value: ILearner) {
    this._learner = value;
  }

  public get learnerToEdit(): ILearner {
    return this._learnerToEdit;
  }

  public set learnerToEdit(value: ILearner) {
    this._learnerToEdit = value;
  }
  //#endregion

  constructor(
    private route: ActivatedRoute,
    private _promoService: PromoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.promo = this._promoService.getPromoById(id);
    });
  }

  addLearnerFromPopup(learners: ILearner[]): void {
    this.learners = learners;
  }

  openPopup() {
    this.isAddLearner = true;
  }

  closePopup() {
    this.isAddLearner = false;
    this.isEditLearner = false;
  }

  editLearner(learner: ILearner) {
    this.learnerToEdit = { ...learner };
    this.isEditLearner = true;
  }

  updateLearner(learner: ILearner) {
    const index = this.learners.findIndex((l) => l.mail === learner.mail);
    this.learners[index] = learner;
  }
}
