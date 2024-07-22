import { IPerson } from './IPerson';

/**
 * Define staffs
 * @field {IPerson} cdp
 * @field {IPerson} former_1
 * @field {IPerson} former_2
 * @field {IPerson} admin_head
 * @field {IPerson} campus_manager
 * @field {IPerson} pedagogical_manager
 */
export interface IStaff {
  cdp: IPerson;
  former_1: IPerson;
  former_2: IPerson;
  admin_head: IPerson;
  campus_manager: IPerson;
  pedagogical_manager: IPerson;
}
