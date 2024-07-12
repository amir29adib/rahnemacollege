import { UniqueID, PositiveNumber } from './base';

type Vote = {
  id: UniqueID;
  plan_id: PositiveNumber;
  user_id: PositiveNumber;
};