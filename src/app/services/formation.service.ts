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
          profilePictureUrl: 'assets/images/jean-dupont.jpg',
        },
        former_2: {
          id: 2,
          name: 'Marie Leclerc',
          profilePictureUrl: 'assets/images/marie-leclerc.jpg',
        },
        caps: {
          id: 3,
          name: 'Paul Martin',
          profilePictureUrl: 'assets/images/paul-martin.jpg',
        },
        charge_admin: {
          id: 4,
          name: 'Alice Bertrand',
          profilePictureUrl: 'assets/images/alice-bertrand.jpg',
        },
        responsable_campus: {
          id: 5,
          name: 'Lucie Durand',
          profilePictureUrl: 'assets/images/lucie-durand.jpg',
        },
        responsable_pedagogique: {
          id: 6,
          name: 'Michel Dubois',
          profilePictureUrl: 'assets/images/michel-dubois.jpg',
        },
      },
    },
  ];
  private people: PersonModel[] = [
    { id: 1, name: 'Alice', profilePictureUrl: 'https://placehold.co/90' },
    { id: 2, name: 'Bob', profilePictureUrl: 'https://placehold.co/90' },
    { id: 3, name: 'Charlie', profilePictureUrl: 'https://placehold.co/90' },
    { id: 4, name: 'Claire', profilePictureUrl: 'https://placehold.co/90' },
    { id: 5, name: 'Jean', profilePictureUrl: 'https://placehold.co/90' },
    { id: 6, name: 'Rémi', profilePictureUrl: 'https://placehold.co/90' },
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
