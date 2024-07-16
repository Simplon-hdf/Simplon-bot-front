import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss',
})
export class Step1Component implements OnInit {
  formationForm!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.formationForm = this.rootFormGroup.control.get(
      'basicInfo'
    ) as FormGroup;
  }
}
