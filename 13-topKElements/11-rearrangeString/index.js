import Heap from "collections/heap";

const func = (str) => {
  const arr = str.split("");
  const map = new Map();
  const heap = new Heap([], null, (a, b) => a[1] - b[1]);
  arr.forEach((elem) => {
    map.set(elem, (map.get(elem) ?? 0) + 1);
  });

  for (const [key, val] of map) {
    heap.push([key, val]);
  }

  let [key, val] = heap.pop();

  let output = "";

  while (output.length < str.length) {
    if (val > 0) {
      if (output[output.length - 1] === key) {
        return "";
      }
      output += key;
      val--;
    }
    if (heap.length > 0) {
      let [inner, innerVal] = heap.pop();
      if (output[output.length - 1] === inner) {
        return "";
      }
      output += inner;
      innerVal--;
      if (innerVal > 0) {
        heap.push([inner, innerVal]);
      }
    }
  }

  return output;
};

export default func;
