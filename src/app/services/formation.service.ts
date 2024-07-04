import { Injectable } from '@angular/core';
import { FormationModel } from '../models/formation-model';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private formations: FormationModel[] = [
    {
      id: 1,
      name: 'Formation 1',
      start_date: '2023-01-01',
      end_date: '2023-01-10',
      place: 'Paris',
      caps: 'John Doe',
      status: 'en cours',
    },
    {
      id: 2,
      name: 'Formation 2',
      start_date: '2023-02-01',
      end_date: '2023-02-10',
      place: 'Lyon',
      caps: 'Jane Smith',
      status: 'terminé',
    },
  ];

  getFormations() {
    return this.formations;
  }

  addFormation(formation: any) {
    this.formations.push({ ...formation, id: this.formations.length + 1 });
  }
}
