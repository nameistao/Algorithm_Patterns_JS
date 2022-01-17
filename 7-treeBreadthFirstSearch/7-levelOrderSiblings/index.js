const func = (root) => {
  const queue = [root];

  while (queue.length) {
    const qLen = queue.length;

    for (let i = 0; i < qLen; i++) {
      const node = queue[i];

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      node.next = i + 1 >= qLen ? null : queue[i + 1];
    }

    for (let i = 0; i < qLen; i++) {
      queue.shift();
    }
  }
};

export default func;
