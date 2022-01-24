import Heap from "collections/heap";

const func = (points, k) => {
  const heap = new Heap([], null, (a, b) => a[0] - b[0]);

  points.forEach((elem) => {
    const dist = (elem[0] ** 2 + elem[1] ** 2) ** 0.5;
    console.log(dist);

    heap.push([dist, elem]);

    if (heap.length > k) {
      heap.pop();
    }
  });

  const answer = [];
  while (heap.length) {
    answer.push(heap.pop()[1]);
  }

  return answer;
};

export default func;
