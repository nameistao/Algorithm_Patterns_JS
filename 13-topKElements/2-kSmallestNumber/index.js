import Heap from "collections/heap";

const func = (arr, k) => {
  const heap = new Heap();
  arr.forEach((elem) => {
    heap.push(elem);
    if (heap.length > k) {
      heap.pop();
    }
  });

  return heap.pop();
};

export default func;
