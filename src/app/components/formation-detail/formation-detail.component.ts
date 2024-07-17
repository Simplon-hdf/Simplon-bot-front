import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { FormationModel } from '../../models/formation-model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StaffCardComponent } from '../staff-card/staff-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddLearnersPopupComponent } from '../add-learners-popup/add-learners-popup.component';
import { LearnerModel } from '../../models/learner-model';
import { LearnersTableComponent } from '../learners-table/learners-table.component';

@Component({
  selector: 'app-formation-detail',
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
  templateUrl: './formation-detail.component.html',
  styleUrl: './formation-detail.component.scss',
})
export class FormationDetailComponent implements OnInit {
  private _isPopupVisible = false;
  private _learners: LearnerModel[] = [];
  private _formation: FormationModel | undefined;

  //#region ACCESSORS

  public get formation(): FormationModel | undefined {
    return this._formation;
  }

  public set formation(value: FormationModel | undefined) {
    this._formation = value;
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
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.formation = this.formationService.getFormationById(id);
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
