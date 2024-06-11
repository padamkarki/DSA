class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // const newNode = {
    //     value: value,
    //     next: null,
    //   };
    const newNode = new Node(value); // same as above commented code
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // const newNode = {
    //     value: value,
    //     next: null,
    //   };
    const newNode = new Node(value); // same as above commented code

    newNode.next = this.head;
    this.head.prev = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;
    leader.next = nodeToRemove.next;
    nodeToRemove.next.prev = leader;
    this.length--;
    return;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(18);
myLinkedList.prepend(1);
myLinkedList.insert(1, 20);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();

console.log(myLinkedList);
