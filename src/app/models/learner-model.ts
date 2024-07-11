import { FormationModel } from './formation-model';

export interface LearnerModel {
  id: number | null;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  formation: FormationModel | null;
}
