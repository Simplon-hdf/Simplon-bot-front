import { Component } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { FormationModel } from '../../models/formation-model';
import { AddFormationPopupComponent } from '../add-formation-popup/add-formation-popup.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [NgFor, AddFormationPopupComponent, NgIf],
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.scss',
})
export class FormationsComponent {
  formations: FormationModel[] = [];
  isPopupVisible = false;

  constructor(private formationService: FormationService) {
    this.formations = this.formationService.getFormations();
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  addFormation(formation: FormationModel) {
    this.formationService.addFormation(formation);
    this.closePopup();
  }
}
