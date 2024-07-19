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
  ],
  templateUrl: './promo-detail.component.html',
  styleUrl: './promo-detail.component.scss',
})
export class PromoDetailComponent implements OnInit {
  private _isPopupVisible = false;
  private _learners: ILearner[] = [];
  private _promo: IPromo | undefined;

  //#region ACCESSORS

  public get promo(): IPromo | undefined {
    return this._promo;
  }

  public set promo(value: IPromo | undefined) {
    this._promo = value;
  }

  public get isPopupVisible() {
    return this._isPopupVisible;
  }

  public set isPopupVisible(value) {
    this._isPopupVisible = value;
  }

  public get learners(): ILearner[] {
    return this._learners;
  }

  public set learners(value: ILearner[]) {
    this._learners = value;
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
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
