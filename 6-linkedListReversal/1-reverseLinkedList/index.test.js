import func from "./index.js";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

test("test 1", () => {
  expect(func(head).value).toBe(10);
});

test("test 2", () => {
  head = func(head);
  expect(func(head).value).toBe(2);
});
