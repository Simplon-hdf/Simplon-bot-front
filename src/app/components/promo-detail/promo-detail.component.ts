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
  /**
   * An array of `ILearner`
   * @defaultValue an empty array
   */
  private _learners: ILearner[] = [];

  /**
   * The promo to be displayed in the page
   * @defaultValue is defined in the constructor. The promo's Id is sent through the URL
   */
  private _promo: IPromo | undefined;

  private _learner: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    promoId: undefined,
  };

  /**
   * - Temp value used to edit the learner.
   * - The temp value is needed otherwise edit in the form directly modifies the table
   */
  private _learnerToEdit: ILearner = {
    id: undefined,
    firstName: '',
    lastName: '',
    mail: '',
    phoneNumber: '',
    promoId: undefined,
  };

  /**
   * Define if a learner is being added
   * @defaultValue is false
   */
  private _isAddLearner = false;

  /**
   * Define if a learner is being edited
   * @defaultValue is false
   */
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

  /**
   * Set `this.learners` to `learners` emited from child component
   * @param learners type `ILearner[]`
   * @returns void
   */
  addLearnerFromPopup(learners: ILearner[]): void {
    this.learners = learners;
  }

  /**
   * Set `this.isAddLearner` to `true`
   * @returns void
   */
  openPopup(): void {
    this.isAddLearner = true;
  }

  /**
   * - Set `this.isAddLearner` to `false`
   * - Set `this.isEditLearner` to `false`
   * @returns void
   */
  closePopup(): void {
    this.isAddLearner = false;
    this.isEditLearner = false;
  }

  /**
   * - Set `this.isEditlearner` to `true`
   * - Clone `learner` to `this.learnerToEdit`
   * @param learner type `ILearner`
   * @returns void
   */
  editLearner(learner: ILearner): void {
    // Using this cloning method to avoid having object with the same reference
    this.learnerToEdit = { ...learner };
    this.isEditLearner = true;
  }

  /**
   * Find `learner` in `this.learners` with `learner.mail` and replaces it with updated values
   * @param learner
   * @returns void
   */
  updateLearner(learner: ILearner): void {
    const index = this.learners.findIndex((l) => l.mail === learner.mail);
    this.learners[index] = learner;
  }
}
