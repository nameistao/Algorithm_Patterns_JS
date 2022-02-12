import Heap from "collections/heap";

const func = (matrix, k) => {
  const arr = [];
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  matrix.forEach((elem, index) => {
    minHeap.push([elem[0], index]);
  });

  while (minHeap.length > 0) {
    const [val, index] = minHeap.pop();
    arr.push(val);
    matrix[index].shift();
    if (matrix[index].length > 0) {
      minHeap.push([matrix[index][0], index]);
    }
  }

  return arr[k - 1];
};

export default func;
