import Heap from "collections/heap";

const func = (arr, k, x) => {
  const heap = new Heap([], null, (a, b) => a[0] - b[0]);

  arr.forEach((elem) => {
    const diff = Math.abs(x - elem);
    heap.push([diff, elem]);
    if (heap.length > 3) {
      heap.pop();
    }
  });

  console.log(heap);
  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(heap.pop()[1]);
  }

  return new Set(answer);
};

export default func;
