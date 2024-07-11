import { FormationModel } from './formation-model';

export interface LearnerModel {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  formation: FormationModel | null;
}
