const func = (root) => {
  const arr = [];
  const queue = [root];
  let goRight = true;

  while (queue.length > 0) {
    const qLen = queue.length;
    const temp = [];
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();

      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }

      if (goRight) {
        temp.push(node.value);
      } else {
        temp.unshift(node.value);
      }
    }

    arr.push(...temp);
    goRight = !goRight;
  }

  return arr;
};

export default func;
