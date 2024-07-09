class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const nodes = new Node('a', new Node('b'));

//other functions
const beforeCLetter = (letter) => {
  compareResult = letter.localeCompare('c');
  return compareResult === -1 ? true : false; 
}

const addWithCharactors = (x) => {
  return x + '_node';
};


//insert
const insert = (element, nodes) => {
  newNodes = new Node(element, nodes);
  console.log(newNodes);
};


//insertList
const insertNextNode = (mainNodes, objects, element) => {
  if (objects['next'] === null) {
    objects['next'] = new Node(element, null);
    return mainNodes;
  } else {
    insertNextNode(mainNodes, objects['next'], element);
  }
};

const insertList = (element, nodes) => {
  insertNextNode(nodes, nodes, element);
};


//size
const countNodes = (mainNodes, objects, counter) => {
  counter++
  if(objects['next'] === null) return counter
  else if (objects === null) return undefined;
  return countNodes(mainNodes, objects['next'], counter);
};

const size = (nodes) => {
  console.log(countNodes(nodes, nodes, 0));
};


//at
const findNthNode = (mainNodes, objects, counter, nth) => {
  counter++
  if (objects === null) return undefined;
  else if(counter === nth) return objects['value']
  return findNthNode(mainNodes, objects['next'], counter, nth);
};

const at = (nodes, n) => {
  console.log(findNthNode(nodes, nodes, 0, n));
};


//join
const joinNodes = (mainNodes, objects) => {
  if (objects === null) return [];
  return [
    objects['value'],
    ...joinNodes(mainNodes, objects['next']),
  ];
};

const join = (nodes, seperator) => {
  arrayNodes = joinNodes(nodes, nodes); 
  console.log(arrayNodes.join(seperator));
  
};


//map
const mapNodes = (mainNodes, objects, addWithCharactors) => {
  if (objects === null) return [];
  return [
    addWithCharactors(objects['value']),
    ...mapNodes(mainNodes, objects['next'], addWithCharactors),
  ];
};

const map = (nodes, addWithCharactors) => {
  console.log(mapNodes(nodes, nodes, addWithCharactors));
};

//filter
const filetrNodes = (mainNodes, objects, beforeCLetter) => {
  if (objects === null) return [];
  checkResult = beforeCLetter(objects['value']);
  if(checkResult) {
    return [
      objects['value'],
      ...filetrNodes(mainNodes, objects['next'], beforeCLetter),
    ];
  }
  return filetrNodes(mainNodes, objects['next'], beforeCLetter);
};

const filter = (nodes, beforeCLetter) => {
  console.log(filetrNodes(nodes, nodes, beforeCLetter));
}


//find
const findNodes = (mainNodes, objects, beforeCLetter) => {
  if (objects === null) return [];
  checkResult = beforeCLetter(objects['value']);
  if(checkResult) {
    return [
      objects['value'],
    ];
  }
  return findNodes(mainNodes, objects['next'], beforeCLetter);
};

const find = (nodes, beforeCLetter) => {
  console.log(findNodes(nodes, nodes, beforeCLetter));
}


insert('c', nodes);
insertList('c', nodes);
size(nodes);
at(nodes, 2);
join(nodes, ',');
map(nodes, addWithCharactors);
filter(nodes, beforeCLetter);
find(nodes, beforeCLetter);