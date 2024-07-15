import { Injectable } from '@angular/core';
import { CsvModel } from '../models/csv-model';
import { LearnerModel } from '../models/learner-model';

@Injectable({
  providedIn: 'root',
})
export class MapperService {
  public csvToLearner(csvModels: CsvModel[]): LearnerModel[] {
    const learners: LearnerModel[] = [];
    //Remplacer
    for (const row of csvModels) {
      const learner: LearnerModel = {
        id: undefined,
        firstName: row.Prénom,
        lastName: row.NOM,
        email: row.Mail,
        phoneNumber: row.Téléphone,
        formationId: undefined,
      };
      learners.push(learner);
    }
    return learners;
  }
}
