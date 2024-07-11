import { Injectable } from '@angular/core';
import { CsvModel } from '../models/csv-model';
import { LearnerModel } from '../models/learner-model';

@Injectable({
  providedIn: 'root',
})
export class MapperService {
  CsvToLearner(csvModels: CsvModel[]): LearnerModel[] {
    const learners: LearnerModel[] = [];
    for (const row of csvModels) {
      const learner: LearnerModel = {
        id: null,
        firstName: row.Prénom,
        lastName: row.NOM,
        email: row.Mail,
        phoneNumber: row.Téléphone,
        formation: null,
      };
      learners.push(learner);
    }
    return learners;
  }
}
