const func = (root, key) => {
  let next = false;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (next) {
      return node.value;
    }

    if (node.value === key) {
      next = true;
    }

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};

export default func;
