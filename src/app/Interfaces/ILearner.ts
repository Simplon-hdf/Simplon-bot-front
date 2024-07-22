/**
 * Define a learner
 * @field {nulber | undefined} id
 * @field {string} lastName
 * @field {string} firstName
 * @field {string} mail
 * @field {string} phoneNumber
 * @field {IPromo | undefined} promoId
 */
export interface ILearner {
  id: number | undefined;
  lastName: string;
  firstName: string;
  mail: string;
  phoneNumber: string;
  promoId: number | undefined;
}
