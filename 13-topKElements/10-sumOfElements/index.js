import Heap from "collections/heap";

const func = (arr, k1, k2) => {
  const heap = new Heap();

  arr.forEach((elem) => {
    heap.push(elem);
    while (heap.length >= k2) {
      heap.pop();
    }
  });

  console.log(heap);
  let answer = 0;
  for (let i = 0; i < k2 - k1 - 1; i++) {
    answer += heap.pop();
  }

  return answer;
};

export default func;
