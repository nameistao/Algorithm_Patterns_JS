import Heap from "collections/heap";

const func = (str) => {
  const map = new Map();

  for (const char of str) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  const heap = new Heap([], null, (a, b) => a[1] - b[1]);
  for (const [key, value] of map) {
    heap.push([key, value]);
  }

  let answer = "";
  while (heap.length) {
    const [key, value] = heap.pop();
    for (let i = 0; i < value; i++) {
      answer += key;
    }
  }

  return answer;
};

export default func;
