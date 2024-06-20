var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(node, low, high) {
  // An empty tree is a valid BST

  if (node === null) {
    return true;
  }
  // Early exit condition if not bst
  // The current node's value must be within the range defined by low and high

  if (
    (low !== null && node.val <= low) ||
    (high !== null && node.val >= high)
  ) {
    return false;
  }

  // Recursively validate the left and right subtrees
  // The left subtree must be less than the current node's value
  // The right subtree must be greater than the current node's value
  return (
    validate(node.left, null, node.val) && validate(node.right, node.val, high)
  );
}
