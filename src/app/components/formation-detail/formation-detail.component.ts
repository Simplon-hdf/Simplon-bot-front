import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import { FormationModel } from '../../models/formation-model';
import { NgIf } from '@angular/common';
import { StaffCardComponent } from '../staff-card/staff-card.component';

@Component({
  selector: 'app-formation-detail',
  standalone: true,
  imports: [NgIf, StaffCardComponent],
  templateUrl: './formation-detail.component.html',
  styleUrl: './formation-detail.component.scss',
})
export class FormationDetailComponent implements OnInit {
  formation: FormationModel | undefined;

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
}
