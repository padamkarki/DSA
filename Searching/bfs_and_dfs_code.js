class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currNode = this.root;
      while (true) {
        if (val < currNode.val) {
          //left
          if (!currNode.left) {
            currNode.left = newNode;
            return this; //exit
          }
          currNode = currNode.left;
        } else {
          //right
          if (!currNode.right) {
            currNode.right = newNode;
            return this; //exit
          }
          currNode = currNode.right;
        }
      }
    }
  }

  lookup(val) {
    if (!this.root) {
      return false;
    }
    let currNode = this.root;
    while (currNode) {
      if (val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val) {
        currNode = currNode.right;
      } else if (currNode.val === val) {
        console.log("Lookup True: ", currNode);
        return currNode;
      }
    }
    return false;
  }

  //     9
  //  4     20
  //1  6  15  170

  breadthFirstSearch() {
    let currNode = this.root;
    let queue = [];
    let list = [];
    queue.push(currNode);

    while (queue.length > 0) {
      currNode = queue.shift();

      console.log(currNode.val);
      list.push(currNode.val);

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    console.log(list);
    return list;
  }
  //In recursion we have to pass arguments because we cant create var in rescursion fn, as it will be reset all time
  BFSRecursive(queue, list) {
    if (!queue.length) {
      // if queue length is zero return list
      return list;
    }

    let currNode = queue.shift();
    list.push(currNode.val);

    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }
    return this.BFSRecursive(queue, list);
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

//     9
//  4     20
//1  6  15  170
//In order = [1,4,6,9,15,20,170]
function traverseInOrder(node, list) {
  // console.log(node.val);
  if (node.left) {
    traverseInOrder(node.left, list); // all the way to left leaf
  }
  list.push(node.val); // push last leaf
  if (node.right) {
    traverseInOrder(node.right, list); // once there is no left leaf then go to right
  }
  return list;
}

//     9
//  4     20
//1  6  15  170
//Pre order = [9,4,1,6,20,15,170]
function traversePreOrder(node, list) {
  list.push(node.val); // push from root to left then go to right
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

//     9
//  4     20
//1  6  15  170
//Post order = [1,6,4,15,170,20,9]
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.val); // at the end push val
  return list;
}

//     9
//  4     20
//1  6  15  170
//for DFS
//In order = [1,4,6,9,15,20,170]
//Pre order = [9,4,1,6,20,15,170]
//Post order = [1,6,4,15,170,20,9]

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// JSON.stringify(traverse(tree.root));
// tree.lookup(170);
// tree.breadthFirstSearch();
// console.log("Recursive method: ", tree.BFSRecursive([tree.root], []));
console.log("InOrder: ", tree.DFSInOrder());
console.log("PreOrder: ", tree.DFSPreOrder());
console.log("PostOrder: ", tree.DFSPostOrder());

function traverse(node) {
  if (node === null) {
    return null;
  }
  const tree = { val: node.val };
  tree.left = traverse(node.left);
  tree.right = traverse(node.right);

  console.log(tree);
  return tree;
}
