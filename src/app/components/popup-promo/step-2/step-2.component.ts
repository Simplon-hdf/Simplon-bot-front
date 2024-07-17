import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PersonModel } from '../../../models/promo-model';
import { CommonModule, NgFor } from '@angular/common';
import { PromoService } from '../../../services/promo.service';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss',
})
export class Step2Component implements OnInit {
  @Input() formGroupName!: string;

  promoForm!: FormGroup;
  people: PersonModel[] = [];

  constructor(
    private rootFormGroup: FormGroupDirective,
    private promoService: PromoService
  ) {
    this.people = this.promoService.getPeople();
  }
  ngOnInit(): void {
    this.promoForm = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }
}
