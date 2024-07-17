import { Injectable } from '@angular/core';
import {
  FormationModel,
  LearnerModel,
  PersonModel,
} from '../models/formation-model';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private formations: FormationModel[] = [
    {
      id: 1,
      basicInfo: {
        name: 'Formation Angular',
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
        caps: {
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

  getFormations(): FormationModel[] {
    return this.formations;
  }

  getFormationById(id: number): FormationModel | undefined {
    return this.formations.find((formation) => formation.id === id);
  }

  addFormation(formation: FormationModel) {
    this.formations.push({ ...formation, id: this.formations.length + 1 });
  }

  addLearnerToFormation(formationId: number, learner: LearnerModel): void {
    const formation = this.getFormationById(formationId);
    if (formation) {
      formation.basicInfo.learners.push(learner);
    }
  }

  updateFormationStatus(id: number, status: string): void {
    const formation = this.formations.find((f) => f.id === id);
    if (formation) {
      formation.basicInfo.status = status;
    }
  }

  getPeople(): PersonModel[] {
    return this.people;
  }
}
