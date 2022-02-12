import Heap from "collections/heap";

const func = (lists) => {
  const answer = [];
  const minHeap = new Heap([], null, (a, b) => b.value - a.value);

  lists.forEach((elem) => {
    if (elem != null) {
      minHeap.push(elem);
    }
  });

  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next != null) {
      minHeap.push(node.next);
    }
  }
  return resultHead;
};

export default func;
