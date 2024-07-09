type PositiveNumber = number & { __positive: true };
type UniqueID = number & { __unique: true; __positive: true };

type Status = 'Undone' | 'Doing' | 'Done';

type ToDoList = {
  id: UniqueID;
  title: string;
  status: Status;
};

const isUniqueID = (x: number): x is UniqueID => {
  const repeatedItems = toDoList.filter((item) => item.id === x);
  if (repeatedItems.length > 0) {
    return false;
  }
  return typeof x === 'number' && x > 0;
};

const isStatus = (x: string): x is Status => {
  return ['Undone', 'Doing', 'Done'].includes(x);
};

let toDoList: ToDoList[] = [];

const get = (): ToDoList[] => {
  return toDoList;
};

const add = (item: ToDoList): UniqueID => {
  if (isUniqueID(item.id)) {
    if (isStatus(item.status)) {
      if (typeof item.title === 'string') {
        toDoList.push(item);
      }
    }
  }
  return item.id;
};

const filterItem = (value: number | string): ToDoList[] => {
  if (typeof value === 'number') {
    return toDoList.filter((item) => item.id === value);
  } else if (isStatus(value)) {
    return toDoList.filter((item) => item.status === value);
  } else if (typeof value === 'string') {
    return toDoList.filter((item) => item.title === value);
  }
  return toDoList;
};

const deleteItem = (value: number) => {
  toDoList = toDoList.filter((item) => item.id !== value);
};

const update = (value: number, status: Status) => {
  toDoList.forEach(function (item) {
    if (item.id === value) {
      item.status = status;
    }
  });
};

const search = (value: string): ToDoList[] => {
  return toDoList.filter((item) => item.title.includes(value));
};

let todo1: ToDoList = {
  id: 1 as UniqueID,
  title: 'Learn TypeScript',
  status: 'Undone',
};

let todo2: ToDoList = {
  id: 2 as UniqueID,
  title: 'Play Football',
  status: 'Doing',
};

let todo3: ToDoList = {
  id: 3 as UniqueID,
  title: 'Learn Python',
  status: 'Done',
};

let todo4: ToDoList = {
  id: 4 as UniqueID,
  title: 'Play Volleyboll',
  status: 'Undone',
};

add(todo1);
add(todo2);
add(todo3);
add(todo4);
console.log(get());

console.log(filterItem(2));
console.log(filterItem('Learn TypeScript'));
console.log(filterItem('Done'));

deleteItem(2);
console.log(get());

update(1, 'Doing');
console.log(get());

console.log(search('Learn'));
