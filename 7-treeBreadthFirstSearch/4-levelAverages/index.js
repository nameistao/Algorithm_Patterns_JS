const func = (root) => {
  const arr = [];
  const queue = [root];

  while (queue.length > 0) {
    const qLen = queue.length;
    const avgArr = [];

    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      avgArr.push(node.value);
    }

    const avg =
      avgArr.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / avgArr.length;

    arr.push(avg);
  }

  return arr;
};

export default func;
