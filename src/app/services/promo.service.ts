import { Injectable } from '@angular/core';
import { IPromo } from '../Interfaces/IPromo';
import { IPerson } from '../Interfaces/IPerson';
import { ILearner } from '../Interfaces/ILearner';

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  private promos: IPromo[] = [];
  private people: IPerson[] = [
    { id: 1, name: 'Alice', profilePictureUrl: 'https://placehold.co/90' },
    { id: 2, name: 'Bob', profilePictureUrl: 'https://placehold.co/90' },
    { id: 3, name: 'Charlie', profilePictureUrl: 'https://placehold.co/90' },
    { id: 4, name: 'Claire', profilePictureUrl: 'https://placehold.co/90' },
    { id: 5, name: 'Jean', profilePictureUrl: 'https://placehold.co/90' },
    { id: 6, name: 'Rémi', profilePictureUrl: 'https://placehold.co/90' },
  ];

  getPromos(): IPromo[] {
    return this.promos;
  }

  getPromoById(id: number): IPromo | undefined {
    return this.promos.find((promo) => promo.id === id);
  }

  addPromo(promo: IPromo) {
    this.promos.push({ ...promo, id: this.promos.length + 1 });
  }

  addLearnerToPromo(promoId: number, learner: ILearner): void {
    const promo = this.getPromoById(promoId);
    if (promo) {
      promo.basicInfo.learners.push(learner);
    }
  }

  updatePromoStatus(id: number, status: string): void {
    const promo = this.promos.find((f) => f.id === id);
    if (promo) {
      promo.basicInfo.status = status;
    }
  }

  getPeople(): IPerson[] {
    return this.people;
  }
}
