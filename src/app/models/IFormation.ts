import { ILearner } from './ILearner';
import { IPerson } from './IPerson';

export interface IFormation {
  id: number;
  name: string;
  place: string;
  status: string;
  type: string;
  former_1: IPerson;
  former_2: IPerson;
  caps: IPerson;
  start_date: string;
  end_date: string;
  charge_admin: IPerson;
  responsable_campus: IPerson;
  responsable_pedagogique: IPerson;
  learners: ILearner[];
}
