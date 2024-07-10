import { Component } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { FormationModel } from '../../models/formation-model';
import { Router } from '@angular/router';
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

  constructor(
    private formationService: FormationService,
    private router: Router
  ) {
    this.formations = this.formationService.getFormations();
    this.checkAndUpdateFormationStatus();
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  checkAndUpdateFormationStatus(): void {
    console.log('checking...');
    const currentDate = new Date();

    this.formations.forEach((formation) => {
      const endDate = new Date(formation.end_date);
      if (endDate < currentDate && formation.status !== 'terminé') {
        formation.status = 'terminé';
      }
    });
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  navigateToFormationDetail(id: number): void {
    this.router.navigate(['/formations', id]);
  }

  addFormation(formation: FormationModel) {
    this.formationService.addFormation(formation);
    console.log(formation);
    this.closePopup();
  }
}
