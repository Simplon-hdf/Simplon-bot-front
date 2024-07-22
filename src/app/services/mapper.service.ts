import { Injectable } from '@angular/core';
import { ICsv } from '../Interfaces/ICsv';
import { ILearner } from '../Interfaces/ILearner';

@Injectable({
  providedIn: 'root',
})
export class MapperService {
  /**
   * Map a csv file matching `ICsv` interface to `ILearner`
   * @param csvModels type `ICsv`
   * @returns an Array of `ILearner`
   */
  public csvToLearner(csvModels: ICsv[]): ILearner[] {
    const learners: ILearner[] = [];
    csvModels.map((row) => {
      const learner: ILearner = {
        id: undefined,
        firstName: row.Prénom,
        lastName: row.NOM,
        mail: row.Mail,
        phoneNumber: row.Téléphone,
        promoId: undefined,
      };
      learners.push(learner);
    });
    return learners;
  }
}
