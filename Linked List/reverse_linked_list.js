class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  // for print
  printList() {
    const list = [];
    let currNode = this.head;
    while (currNode !== null) {
      list.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(list);
    // return list;
  }
  // for insert
  traverseToIndex(index) {
    let counter = 0;
    let currNode = this.head;

    while (counter != index) {
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = holdingPointer.next;
    this.length--;
    return;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      console.log("temp: ", temp);
      second.next = first;
      console.log("second.next: ", second.next);
      first = second;
      console.log("first: ", first);
      second = temp;
      console.log("second: ", second);
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(18);
myLinkedList.prepend(1);
myLinkedList.insert(2, 20);
myLinkedList.insert(20, 28);
// myLinkedList.printList();
myLinkedList.remove(3);

myLinkedList.printList();
myLinkedList.reverse(3);
myLinkedList.printList();

// console.log(myLinkedList);
