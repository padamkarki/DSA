class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    console.log("peek: ", this.array[this.array.length - 1]);
    return this.array.length - 1;
  }

  push(value) {
    this.array.push(value);
    console.log(this);
    return this;
  }

  pop() {
    this.array.pop();
    console.log("after poped: ", this);
    return this;
  }
  isEmpty() {}
}

const myStack = new Stack();
// myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
