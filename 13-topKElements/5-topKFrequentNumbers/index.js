import Heap from "collections/heap";

const func = (arr, k) => {
  const map = new Map();
  arr.forEach((elem) => {
    map.set(elem, (map.get(elem) ?? 0) + 1);
  });

  const heap = new Heap([], null, (a, b) => a[1] - b[1]);

  for (const [key, value] of map) {
    heap.push([key, value]);
  }

  const answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(heap.pop()[0]);
  }
  return answer;
};

export default func;
