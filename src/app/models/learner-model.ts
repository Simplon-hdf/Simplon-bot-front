import { PromoModel } from './promo-model';

export interface LearnerModel {
  id: number | undefined;
  lastName: string;
  firstName: string;
  mail: string;
  phoneNumber: string;
  formationId: PromoModel | undefined;
}
