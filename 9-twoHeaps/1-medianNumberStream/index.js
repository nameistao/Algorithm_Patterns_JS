import Heap from "heap";

class ContMedian {
  constructor() {
    this.lowerHalf = new Heap((a, b) => b - a);
    this.upperHalf = new Heap();
  }

  insert(num) {
    //empty
    if (this.lowerHalf.empty() && this.upperHalf.empty()) {
      this.lowerHalf.push(num);
    } else if (num > this.lowerHalf.peek()) {
      this.upperHalf.push(num);
    } else {
      this.lowerHalf.push(num);
    }

    while (this.lowerHalf.size() > this.upperHalf.size() + 1) {
      this.upperHalf.push(this.lowerHalf.pop());
    }

    while (this.lowerHalf.size() + 1 < this.upperHalf.size()) {
      this.lowerHalf.push(this.upperHalf.pop());
    }
  }

  getMedian() {
    if (this.lowerHalf.size() > this.upperHalf.size()) {
      return this.lowerHalf.peek();
    } else if (this.lowerHalf.size() < this.upperHalf.size()) {
      return this.upperHalf.peek();
    } else {
      return (this.lowerHalf.peek() + this.upperHalf.peek()) / 2;
    }
  }
}

export default ContMedian;
