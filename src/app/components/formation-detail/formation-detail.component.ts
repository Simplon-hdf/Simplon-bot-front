import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { FormationModel, LearnerModel } from '../../models/formation-model';
import { NgFor, NgIf } from '@angular/common';
import { StaffCardComponent } from '../staff-card/staff-card.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [NgIf, StaffCardComponent, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './formation-detail.component.html',
  styleUrl: './formation-detail.component.scss',
})
export class FormationDetailComponent implements OnInit {
  formation: FormationModel | undefined;
  learnerForm: FormGroup;

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
}
