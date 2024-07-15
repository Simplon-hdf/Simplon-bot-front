import { FormationModel } from './formation-model';

export interface LearnerModel {
  id: number | undefined;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  formationId: FormationModel | undefined;
}
