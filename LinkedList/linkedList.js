'use strict'
const LinkedListNode = require('./linkedListNode');

class LinkedList { 
  constructor() {   
    this.head = null;
    this.tail = null;
  } 
 
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

let linkedList = new LinkedList();
 linkedList.append(1);
  console.log('1',linkedList);
 linkedList.append(2);
  console.log('2',linkedList);
 linkedList.append(3);
  console.log('3',linkedList);
 linkedList.append(4);
  console.log('4',linkedList);
 linkedList.append(5); 
 console.log('5',linkedList);