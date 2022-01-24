import Heap from "collections/heap";

const func = (arr) => {
  const heap = new Heap(arr, null, (a, b) => b - a);
  let cost = 0;
  while (heap.length > 1) {
    const first = heap.pop();
    const second = heap.pop();
    cost += first + second;
    heap.push(first + second);
  }
  return cost;
};

export default func;
