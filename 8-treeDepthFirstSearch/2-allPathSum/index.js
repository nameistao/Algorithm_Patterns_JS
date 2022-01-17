const func = (root, num) => {
  const arr = [];
  helper(root, num, 0, arr, []);
  return arr;
};

const helper = (root, num, sum, arr, temp) => {
  sum += root.value;
  temp.push(root.value);
  if (root.left == null && root.right == null && sum === num) {
    arr.push([...temp]);
  }

  if (root.left) {
    helper(root.left, num, sum, arr, [...temp]);
  }
  if (root.right) {
    helper(root.right, num, sum, arr, [...temp]);
  }
};

export default func;
