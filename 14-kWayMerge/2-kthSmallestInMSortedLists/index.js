import Heap from "collections/heap";

const func = (lists, k) => {
  const arr = [];
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  lists.forEach((elem, index) => {
    minHeap.push([elem[0], index]);
  });

  while (minHeap.length) {
    const [val, index] = minHeap.pop();
    arr.push(val);
    lists[index].shift();
    if (lists[index].length > 0) {
      minHeap.push([lists[index][0], index]);
    }
  }

  return arr[k - 1];
};

export default func;
