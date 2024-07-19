import { Injectable } from '@angular/core';
import { ICsv } from '../Interfaces/ICsv';
import { ILearner } from '../Interfaces/ILearner';

@Injectable({
  providedIn: 'root',
})
export class MapperService {
  public csvToLearner(csvModels: ICsv[]): ILearner[] {
    const learners: ILearner[] = [];
    //Remplacer
    for (const row of csvModels) {
      const learner: ILearner = {
        id: undefined,
        firstName: row.Prénom,
        lastName: row.NOM,
        mail: row.Mail,
        phoneNumber: row.Téléphone,
        promoId: undefined,
      };
      learners.push(learner);
    }
    return learners;
  }
}
