import Heap from "collections/heap";

const func = (capital, profits, numProjects, initialCapital) => {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);

  for (let i = 0; i < capital.length; i++) {
    const pair = [capital[i], i];
    minHeap.push(pair);
  }

  let projects = 0;
  while (projects < numProjects) {
    while (minHeap.length > 0 && minHeap.peek()[0] <= initialCapital) {
      const [cost, index] = minHeap.pop();
      maxHeap.push([profits[index], index]);
    }

    const [profit, index] = maxHeap.pop();
    initialCapital += profit;

    projects++;
  }

  return initialCapital;
};

export default func;
