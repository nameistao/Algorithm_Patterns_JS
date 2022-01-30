import Heap from "collections/heap";

const func = (arr, k) => {
  const map = new Map();
  arr.forEach((elem) => {
    map.set(elem, (map.get(elem) ?? 0) + 1);
  });

  const heap = new Heap([], null, (a, b) => b[1] - a[1]);

  for (const [key, value] of map) {
    if (value > 1) {
      heap.push([key, value]);
    }
  }

  while (heap.length > 0 && heap.peek()[1] - 1 <= k) {
    const [key, value] = heap.pop();
    map.set(key, 1);
    k -= value - 1;
  }

  let allOnes = true;
  let answer = 0;
  for (const [key, value] of map) {
    if (value === 1) {
      answer++;
    } else {
      allOnes = false;
    }
  }

  if (allOnes) {
    answer -= k;
  }

  return answer;
};

export default func;
