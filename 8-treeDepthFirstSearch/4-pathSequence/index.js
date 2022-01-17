const func = (root, sequence) => {
  return helper(root, sequence, 0);
};

const helper = (root, sequence, found) => {
  if (root.value === sequence[found]) {
    found++;
  }

  if (found === sequence.length) {
    return true;
  }

  const left = root.left == null ? false : helper(root.left, sequence, found);
  const right =
    root.right == null ? false : helper(root.right, sequence, found);

  return left || right;
};

export default func;
