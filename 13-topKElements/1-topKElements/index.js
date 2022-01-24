import Heap from "collections/heap";

const func = (arr, k) => {
  const heap = new Heap([], null, (a, b) => b - a);
  arr.forEach((elem) => {
    heap.push(elem);
    if (heap.length > k) {
      heap.pop();
    }
  });

  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(heap.pop());
  }

  return new Set(answer);
};

export default func;
