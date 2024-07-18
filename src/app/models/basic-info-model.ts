import { LearnerModel } from './learner-model';

export interface BasicInfo {
  name: string;
  start_date: string;
  end_date: string;
  type: string;
  place: string;
  status: string;
  learners: LearnerModel[];
}
