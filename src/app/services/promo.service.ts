import { Injectable } from '@angular/core';
import { PromoModel } from '../models/promo-model';
import { PersonModel } from '../models/person-model';
import { LearnerModel } from '../models/learner-model';

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  private promos: PromoModel[] = [
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
          profile_picture_url: 'assets/images/jean-dupont.jpg',
        },
        former_2: {
          id: 2,
          name: 'Marie Leclerc',
          profile_picture_url: 'assets/images/marie-leclerc.jpg',
        },
        cdp: {
          id: 3,
          name: 'Paul Martin',
          profile_picture_url: 'assets/images/paul-martin.jpg',
        },
        admin_head: {
          id: 4,
          name: 'Alice Bertrand',
          profile_picture_url: 'assets/images/alice-bertrand.jpg',
        },
        campus_manager: {
          id: 5,
          name: 'Lucie Durand',
          profile_picture_url: 'assets/images/lucie-durand.jpg',
        },
        pedagogical_manager: {
          id: 6,
          name: 'Michel Dubois',
          profile_picture_url: 'assets/images/michel-dubois.jpg',
        },
      },
    },
  ];
  private people: PersonModel[] = [
    { id: 1, name: 'Alice', profile_picture_url: 'https://placehold.co/90' },
    { id: 2, name: 'Bob', profile_picture_url: 'https://placehold.co/90' },
    { id: 3, name: 'Charlie', profile_picture_url: 'https://placehold.co/90' },
    { id: 4, name: 'Claire', profile_picture_url: 'https://placehold.co/90' },
    { id: 5, name: 'Jean', profile_picture_url: 'https://placehold.co/90' },
    { id: 6, name: 'Rémi', profile_picture_url: 'https://placehold.co/90' },
  ];

  getPromos(): PromoModel[] {
    return this.promos;
  }

  getPromoById(id: number): PromoModel | undefined {
    return this.promos.find((promo) => promo.id === id);
  }

  addPromo(promo: PromoModel) {
    this.promos.push({ ...promo, id: this.promos.length + 1 });
  }

  addLearnerToPromo(promoId: number, learner: LearnerModel): void {
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

  getPeople(): PersonModel[] {
    return this.people;
  }
}
