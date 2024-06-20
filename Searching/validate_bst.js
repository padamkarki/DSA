var isValidBST = function (root) {
  return validate(root, null, null);
};

function validate(node, low, high) {
  if (node === null) {
    return true;
  }

  if (
    (low !== null && node.val <= low) ||
    (high !== null && node.val >= high)
  ) {
    return false;
  }

  return (
    validate(node.left, null, node.val) && validate(node.right, node.val, high)
  );
}
