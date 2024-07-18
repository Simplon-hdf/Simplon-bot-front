import { Component } from '@angular/core';
import { PromoService } from '../../services/promo.service';
import { Router } from '@angular/router';
import { AddPromoPopupComponent } from '../add-promo-popup/add-promo-popup.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IPromo } from '../../Interfaces/IPromo';

@Component({
  selector: 'app-promos',
  standalone: true,
  imports: [NgFor, AddPromoPopupComponent, NgIf, FormsModule, CommonModule],
  templateUrl: './promos.component.html',
  styleUrl: './promos.component.scss',
})
export class PromosComponent {
  promos: IPromo[] = [];
  filteredPromos: IPromo[] = [];
  searchTerm = '';
  isPopupVisible = false;

  constructor(
    private promoService: PromoService,
    private router: Router
  ) {
    this.promos = this.promoService.getPromos();
    this.filteredPromos = this.promos;
    this.checkAndUpdatePromoStatus();
  }

  filterPromos(): void {
    if (!this.searchTerm) {
      this.filteredPromos = this.promos;
    } else {
      this.filteredPromos = this.promos.filter((promo) =>
        promo.basicInfo.name
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    }
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  checkAndUpdatePromoStatus(): void {
    const now = new Date();
    this.promos.forEach((promo) => {
      const startDate = new Date(promo.basicInfo.start_date);
      const endDate = new Date(promo.basicInfo.end_date);

      if (endDate < now) {
        promo.basicInfo.status = 'terminé';
      } else if (startDate > now) {
        promo.basicInfo.status = 'à venir';
      } else {
        promo.basicInfo.status = 'en cours';
      }
    });
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  navigateToPromoDetail(id: number): void {
    this.router.navigate(['/promos', id]);
  }

  addPromo(promo: IPromo) {
    this.promoService.addPromo(promo);
    this.closePopup();
  }
}
