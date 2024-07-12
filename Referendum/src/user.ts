import { UniqueID, Role } from './base';

type User = {
    id: UniqueID;
    username: string;
    password: string;
    role: Role;
};

const manager: User = {
    id: 1 as UniqueID,
    username: 'manager',
    password: 'manager1234',
    role: 'Manager',
};

const agent: User = {
    id: 2 as UniqueID,
    username: 'ali',
    password: 'ali1234',
    role: 'Agent',
};

const person: User = {
    id: 3 as UniqueID,
    username: 'amir',
    password: 'amir1234',
    role: 'People',
};

let users: User[] = [];

const isUniqueID = (x: number): x is UniqueID => {
    const repeatedItems = users.filter((item) => item.id === x);
    if (repeatedItems.length > 0) {
      return false;
    }
    return typeof x === 'number' && x > 0;
};

const isUniqueUsername = (x: string): x is string => {
    const repeatedItems = users.filter((item) => item.username === x);
    if (repeatedItems.length > 0) {
      return false;
    }
    return typeof x === 'string';
};

const isRole = (x: string): x is Role => {
    return ['Manager', 'Agent', 'People'].includes(x);
};

const add = (item: User): UniqueID => {
    if (isUniqueID(item.id)) {
      if (isUniqueUsername(item.username)) {
        if (isRole(item.role)) {
            users.push(item);
        }
      }
    }
    return item.id;
};

add(manager);
add(agent);
add(person);

export const getUser = (username: string, password: string): User | undefined => {
    return users.find((item) => item.username === username && item.password === password);
};

export type { User };