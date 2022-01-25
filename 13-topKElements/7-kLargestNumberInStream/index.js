import Heap from "collections/heap";

class Clazz {
  constructor(k) {
    this.heap = new Heap([], null, (a, b) => b - a);
    this.k = k;
  }

  getKLargest() {
    return this.heap.peek();
  }

  add(elem) {
    if (this.heap.length < this.k) {
      this.heap.push(elem);
    } else {
      if (this.heap.peek() < elem) {
        this.heap.pop();
        this.heap.push(elem);
      }
    }
  }
}

export default Clazz;
