import { Injectable } from '@angular/core';
import { IPromo } from '../Interfaces/IPromo';
import { IPerson } from '../Interfaces/IPerson';
import { ILearner } from '../Interfaces/ILearner';

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  private promos: IPromo[] = [
    {
      id: 1,
      basicInfo: {
        name: 'Promo Angular',
        status: 'En cours',
        type: 'Développement web',
        place: 'Paris',
        start_date: '2024-07-01',
        end_date: '2024-08-31',
        learners: [],
      },
      staffs: {
        former_1: {
          id: 1,
          name: 'Jean Dupont',
          profilePictureUrl: 'assets/images/jean-dupont.jpg',
        },
        former_2: {
          id: 2,
          name: 'Marie Leclerc',
          profilePictureUrl: 'assets/images/marie-leclerc.jpg',
        },
        cdp: {
          id: 3,
          name: 'Paul Martin',
          profilePictureUrl: 'assets/images/paul-martin.jpg',
        },
        admin_head: {
          id: 4,
          name: 'Alice Bertrand',
          profilePictureUrl: 'assets/images/alice-bertrand.jpg',
        },
        campus_manager: {
          id: 5,
          name: 'Lucie Durand',
          profilePictureUrl: 'assets/images/lucie-durand.jpg',
        },
        pedagogical_manager: {
          id: 6,
          name: 'Michel Dubois',
          profilePictureUrl: 'assets/images/michel-dubois.jpg',
        },
      },
    },
  ];
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
