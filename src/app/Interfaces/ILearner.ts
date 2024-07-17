import { IFormation } from './IFormation';

export interface ILearner {
  id: number | undefined;
  lastName: string;
  firstName: string;
  mail: string;
  phoneNumber: string;
  formationId: IFormation | undefined;
}
