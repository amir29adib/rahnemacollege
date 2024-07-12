import { UniqueID, Role } from './base';

type User = {
  id: UniqueID;
  username: string;
  password: string;
  role: Role;
};