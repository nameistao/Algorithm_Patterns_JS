const func = (root) => {
  const arr = [];
  const queue = [root];

  while (queue.length > 0) {
    arr.unshift(queue[0].value);
    if (queue[0].right != null) {
      queue.push(queue[0].right);
    }
    if (queue[0].left != null) {
      queue.push(queue[0].left);
    }
    queue.shift();
  }

  return arr;
};

export default func;
