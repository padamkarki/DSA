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
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
JSON.stringify(traverse(tree.root));
tree.lookup(170);

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
