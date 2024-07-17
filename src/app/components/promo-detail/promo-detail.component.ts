import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromoService } from '../../services/promo.service';
import { PromoModel, LearnerModel } from '../../models/promo-model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StaffCardComponent } from '../staff-card/staff-card.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
  ],
  templateUrl: './promo-detail.component.html',
  styleUrl: './promo-detail.component.scss',
})
export class PromoDetailComponent implements OnInit {
  promo: PromoModel | undefined;
  learnerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private promoService: PromoService,
    private fb: FormBuilder
  ) {
    this.learnerForm = this.fb.group({
      name: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.promo = this.promoService.getPromoById(id);
    });
  }

  addLearner(): void {
    if (this.learnerForm.valid) {
      const newLearner: LearnerModel = this.learnerForm.value;
      this.promoService.addLearnerToPromo(this.promo!.id, newLearner);
      this.learnerForm.reset();
    }
  }
}
