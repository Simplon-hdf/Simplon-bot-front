import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PersonModel } from '../../../models/formation-model';
import { CommonModule, NgFor } from '@angular/common';
import { FormationService } from '../../../services/formation.service';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss',
})
export class Step2Component implements OnInit {
  @Input() formGroupName!: string;

  formationForm!: FormGroup;
  people: PersonModel[] = [];

  constructor(
    private rootFormGroup: FormGroupDirective,
    private formationService: FormationService
  ) {
    this.people = this.formationService.getPeople();
    console.log(this.formGroupName);
  }
  ngOnInit(): void {
    this.formationForm = this.rootFormGroup.control.get(
      this.formGroupName
    ) as FormGroup;
  }
}
