# Implementation of Linked List data structure using js

This data structure consists of different nodes, each of which contains a field for value and a field that points to the next node in the list.

# For example, we can have a data structure like this:

const list = {
value: 'a'
next: {
value: 'b',
next: null
}
}

# This list contains two members a and b Or we can define each node using a class:

class Node {
constructor(value, next = null) {
this.value = value;
this.next = next;
}
}

# In this case, we can define the list a and b as follows:

const list = Node('a', Node('b'));


# Having this data structure, we perform the following functions on it:

- Insert function:
  - Adds a member to the top of the list

- insetList function:
  - Adds a member to the end of the list

- size function:
  - Specifies the number of members in the list

- at function:
  - Takes a number n as input and returns the nth node.
  
- join function:
  - It takes a separator as an argument and joins the members of the list together with its help and finally returns it as a string.

- map function:
  - Takes a function in its argument, applies it to all members of the list and creates a new list.

- filter function:
  - takes a function in its argument and applies it to all members of the list, finally creating a new list. In this way, whenever the value of that function is true, that member will be in the new list.

- find function:
  - Takes a function in its argument and returns the first node where that function has the value of true for the value of that node