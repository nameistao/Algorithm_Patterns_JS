import Heap from "collections/heap";

class WindowMedian {
  constructor() {
    this.maxHeap = new Heap();
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  insert(num) {
    if (this.maxHeap.length === 0 && this.minHeap.length === 0) {
      this.maxHeap.push(num);
      return;
    }

    if (num > this.maxHeap.peek()) {
      this.minHeap.push(num);
    } else {
      this.maxHeap.push(num);
    }

    this.rebalance();
  }

  rebalance() {
    while (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    }

    while (this.maxHeap.length + 1 < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  delete(num) {
    if (num <= this.maxHeap.peek()) {
      this.maxHeap.delete(num);
    } else {
      this.minHeap.delete(num);
    }
    this.rebalance();
  }

  getMedian() {
    if (this.maxHeap.length > this.minHeap.length) {
      return this.maxHeap.peek();
    } else if (this.maxHeap.length < this.minHeap.length) {
      return this.minHeap.peek();
    } else {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    }
  }
}

const func = (arr, k) => {
  let i = 0;
  const answer = [];
  const windowMedian = new WindowMedian();
  while (i < k) {
    windowMedian.insert(arr[i++]);
  }

  answer.push(windowMedian.getMedian());

  while (i < arr.length) {
    windowMedian.insert(arr[i]);
    windowMedian.delete(arr[i - k]);
    answer.push(windowMedian.getMedian());
    i++;
  }

  return answer;
};

export default func;
