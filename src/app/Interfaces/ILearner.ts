import { IPromo } from './IPromo';

export interface ILearner {
  id: number | undefined;
  lastName: string;
  firstName: string;
  mail: string;
  phoneNumber: string;
  formationId: IPromo | undefined;
}
