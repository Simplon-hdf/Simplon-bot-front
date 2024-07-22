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
    // Initialize promos from the promo service
    this.promos = this.promoService.getPromos();
    // Initialize filteredPromos to display all promos initially
    this.filteredPromos = this.promos;
    // Check and update the status of each promo based on current date
    this.checkAndUpdatePromoStatus();
  }

  /**
   * Filter the promos based on the search term.
   * If search term is empty, display all promos.
   * Otherwise, filter promos by name.
   */
  public filterPromos(): void {
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

  /**
   * Open the popup to add a new promo.
   */
  public openPopup() {
    this.isPopupVisible = true;
  }

  /**
   * Check and update the status of each promo based on the current date.
   * Set status to 'terminé' if end date is past, 'à venir' if start date is in the future,
   * and 'en cours' if current date is between start and end dates.
   */
  private checkAndUpdatePromoStatus(): void {
    const now = new Date();
    this.promos.forEach((promo) => {
      const startDate = new Date(promo.basicInfo.start_date);
      const endDate = new Date(promo.basicInfo.end_date);

      if (endDate < now) {
        promo.basicInfo.status = 'terminated';
      } else if (startDate > now) {
        promo.basicInfo.status = 'upcoming';
      } else {
        promo.basicInfo.status = 'ongoing';
      }
    });
  }

  /**
   * Close the popup.
   */
  public closePopup() {
    this.isPopupVisible = false;
  }

  /**
   * Navigate to the detail view of the selected promo.
   * @param id - The id of the promo to view.
   */
  public navigateToPromoDetail(id: number): void {
    this.router.navigate(['/promos', id]);
  }

  /**
   * Add a new promo using the promo service and close the popup.
   * @param promo - The promo to add.
   */
  public addPromo(promo: IPromo) {
    this.promoService.addPromo(promo);
    this.closePopup();
  }
}
