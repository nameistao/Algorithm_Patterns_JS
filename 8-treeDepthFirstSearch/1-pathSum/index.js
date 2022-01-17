const func = (root, num) => {
  return helper(root, num, 0);
};

const helper = (node, num, sum) => {
  sum += node.value;
  if (node.left == null && node.right == null) {
    if (sum === num) {
      return true;
    } else {
      return false;
    }
  }

  const left = node.left == null ? false : helper(node.left, num, sum);
  const right = node.right == null ? false : helper(node.right, num, sum);

  return left || right;
};

export default func;
