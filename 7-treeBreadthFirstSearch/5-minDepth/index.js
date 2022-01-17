const func = (root) => {
  let depth = 0;
  const queue = [root];

  while (queue.length) {
    depth++;
    const qLen = queue.length;
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (node.left == null && node.right == null) {
        return depth;
      }
    }
  }

  return depth;
};

export default func;
