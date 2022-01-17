const func = (root) => {
  const arr = [];
  helper(root, 0, arr);
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const helper = (root, sum, arr) => {
  sum *= 10;
  sum += root.value;

  if (root.left == null && root.right == null) {
    arr.push(sum);
  }

  if (root.left) {
    helper(root.left, sum, arr);
  }
  if (root.right) {
    helper(root.right, sum, arr);
  }
};

export default func;
