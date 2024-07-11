import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { FormationModel } from '../../models/formation-model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StaffCardComponent } from '../staff-card/staff-card.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddLearnersPopupComponent } from '../add-learners-popup/add-learners-popup.component';
import { LearnerModel } from '../../models/learner-model';

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
  ],
  templateUrl: './formation-detail.component.html',
  styleUrl: './formation-detail.component.scss',
})
export class FormationDetailComponent implements OnInit {
  formation: FormationModel | undefined;
  learnerForm: FormGroup;
  isPopupVisible = false;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private fb: FormBuilder
  ) {
    this.learnerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.formation = this.formationService.getFormationById(id);
    });
  }

  addLearner(): void {
    if (this.learnerForm.valid) {
      const newLearner: LearnerModel = this.learnerForm.value;
      this.formationService.addLearnerToFormation(
        this.formation!.id,
        newLearner
      );
      this.learnerForm.reset();
    }
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
