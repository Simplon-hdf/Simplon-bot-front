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
      id: 0,
      name: 'Dev Inté P6',
      status: 'en cours',
      type: 'dev inté',
      place: 'Lens',
      former_1: {
        id: 1,
        name: 'Alice',
        profilePictureUrl: 'https://placehold.co/90',
      },
      former_2: {
        id: 2,
        name: 'Bob',
        profilePictureUrl: 'https://placehold.co/90',
      },
      caps: {
        id: 3,
        name: 'Charlie',
        profilePictureUrl: 'https://placehold.co/90',
      },
      start_date: '2023-02-01',
      end_date: '2023-02-10',
      charge_admin: {
        id: 4,
        name: 'Claire',
        profilePictureUrl: 'https://placehold.co/90',
      },
      responsable_campus: {
        id: 5,
        name: 'Jean',
        profilePictureUrl: 'https://placehold.co/90',
      },
      responsable_pedagogique: {
        id: 6,
        name: 'Rémi',
        profilePictureUrl: 'https://placehold.co/90',
      },
      learners: [],
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
      formation.learners.push(learner);
    }
  }

  updateFormationStatus(id: number, status: string): void {
    const formation = this.formations.find((f) => f.id === id);
    if (formation) {
      formation.status = status;
    }
  }

  getPeople(): PersonModel[] {
    return this.people;
  }
}
