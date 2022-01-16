import func from "./index.js";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

test("test 1", () => {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head = func(head, 2, 4);
  const arr = [];
  while (head != null) {
    arr.push(head.value);
    head = head.next;
  }

  expect(arr).toEqual([1, 4, 3, 2, 5]);
});

test("test 2", () => {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head = func(head, 2, 6);
  const arr = [];
  while (head != null) {
    arr.push(head.value);
    head = head.next;
  }

  expect(arr).toEqual([1, 6, 5, 4, 3, 2]);
});
