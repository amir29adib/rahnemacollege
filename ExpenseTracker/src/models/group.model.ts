import { User } from "models/user.model";

export interface Group {
  id: string;
  cost: number;
  spender: User;
  otherUsers: User[];
}

export const groups: Group[] = [];
