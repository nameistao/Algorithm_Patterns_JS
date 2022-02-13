import Heap from "collections/heap";

const func = (lists) => {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  let maxInHeap = -Infinity;
  const range = [0, Number.MAX_SAFE_INTEGER];

  lists.forEach((elem, index) => {
    maxInHeap = Math.max(maxInHeap, elem[0]);
    minHeap.push([elem[0], index]);
  });

  while (minHeap.length > 0) {
    const [val, index] = minHeap.pop();
    if (minHeap.length >= 2 && maxInHeap - val < range[1] - range[0]) {
      range[0] = val;
      range[1] = maxInHeap;
    }
    lists[index].shift();
    if (lists[index].length > 0) {
      maxInHeap = Math.max(maxInHeap, lists[index][0]);
      minHeap.push([lists[index][0], index]);
    }
  }

  return range;
};

export default func;
