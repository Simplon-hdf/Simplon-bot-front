import { FormationModel } from './formation-model';

export interface LearnerModel {
  id: number | undefined;
  lastName: string;
  firstName: string;
  mail: string;
  phoneNumber: string;
  formationId: FormationModel | undefined;
}
