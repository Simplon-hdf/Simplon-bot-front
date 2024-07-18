import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffCardComponent } from '../staff-card/staff-card.component';
import { AddLearnersPopupComponent } from '../add-learners-popup/add-learners-popup.component';
import { LearnersTableComponent } from '../learners-table/learners-table.component';
import { LearnerModel } from '../../models/learner-model';
import { PromoService } from '../../services/promo.service';
import { PromoModel } from '../../models/promo-model';

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
  private _learners: LearnerModel[] = [];
  private _promo: PromoModel | undefined;
  private _promoService: PromoService,

  //#region ACCESSORS

  public get promo(): PromoService | undefined {
    return this._promo;
  }

  public set promo(value: PromoService | undefined) {
    this._promo = value;
  }

  public get isPopupVisible() {
    return this._isPopupVisible;
  }

  public set isPopupVisible(value) {
    this._isPopupVisible = value;
  }

  public get learners(): LearnerModel[] {
    return this._learners;
  }

  public set learners(value: LearnerModel[]) {
    this._learners = value;
  }
  //#endregion

  constructor(
    private route: ActivatedRoute,
    private promoService: PromoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.promo = this.promoService.getPromoById(id);
    });
  }

  addLearnerFromPopup(learners: LearnerModel[]): void {
    this.learners = learners;
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
