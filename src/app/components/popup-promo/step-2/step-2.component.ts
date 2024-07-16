import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Validators,
} from '@angular/forms';
import { PersonModel } from '../../../models/formation-model';
import { CommonModule, NgFor } from '@angular/common';
import { FormationService } from '../../../services/formation.service';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss',
})
export class Step2Component implements OnInit {
  formationForm!: FormGroup;
  people: PersonModel[] = [];

  constructor(
    private rootFormGroup: FormGroupDirective,
    private formationService: FormationService
  ) {
    this.people = this.formationService.getPeople();
  }
  ngOnInit(): void {
    this.formationForm = this.rootFormGroup.control.get('staffs') as FormGroup;
  }
}
