import { ILearner } from './ILearner';

/**
 * Define the basic informations of a promo
 * @field {string} name
 * @field {string} start_date
 * @field {string} end_date
 * @field {string} type
 * @field {string} place
 * @field {string} status
 * @field {ILearner[]} learners
 */
export interface IBasicInfo {
  name: string;
  start_date: string;
  end_date: string;
  type: string;
  place: string;
  status: string;
  learners: ILearner[];
}
