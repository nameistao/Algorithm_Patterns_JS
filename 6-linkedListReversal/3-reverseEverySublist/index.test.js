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
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);

  head = func(head, 3);
  const arr = [];
  while (head != null) {
    arr.push(head.value);
    head = head.next;
  }
  expect(arr).toEqual([3, 2, 1, 6, 5, 4, 8, 7]);
});

test("test 2", () => {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);

  head = func(head, 2);
  const arr = [];
  while (head != null) {
    arr.push(head.value);
    head = head.next;
  }
  expect(arr).toEqual([2, 1, 4, 3, 6, 5, 8, 7]);
});

test("test 3", () => {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = new Node(7);
  head.next.next.next.next.next.next.next = new Node(8);

  head = func(head, 7);
  const arr = [];
  while (head != null) {
    arr.push(head.value);
    head = head.next;
  }
  expect(arr).toEqual([7, 6, 5, 4, 3, 2, 1, 8]);
});
