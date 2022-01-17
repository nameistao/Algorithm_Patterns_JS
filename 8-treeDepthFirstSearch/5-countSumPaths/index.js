const func = (root, num) => {
  const arr = [];
  helper(root, num, 0, arr, []);
  return arr.length;
};

const helper = (root, num, sum, arr, temp) => {
  sum += root.value;
  temp = temp.map((elem) => elem + root.value);
  temp.push(root.value);

  temp.forEach((elem) => {
    if (elem === num) {
      arr.push(elem);
    }
  });

  if (root.left) {
    helper(root.left, num, sum, arr, [...temp]);
  }
  if (root.right) {
    helper(root.right, num, sum, arr, [...temp]);
  }
};

export default func;
