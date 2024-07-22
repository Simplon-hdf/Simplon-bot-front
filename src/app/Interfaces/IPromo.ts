import { IBasicInfo } from './IBasicInfo';
import { IStaff } from './IStaff';

/**
 * Define a promo
 * @field {number} id
 * @field {IBasicInfo} basicInfo
 * @field {IStaffs} staffs
 */
export interface IPromo {
  id: number;
  basicInfo: IBasicInfo;
  staffs: IStaff;
}
