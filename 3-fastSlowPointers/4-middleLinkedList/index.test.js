import func from "./index";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

test("test 1", () => {
  expect(func(head)).toBe(3);
});

test("test 2", () => {
  head.next.next.next.next.next = new Node(6);
  expect(func(head)).toBe(4);
});

test("test 3", () => {
  head.next.next.next.next.next.next = new Node(7);
  expect(func(head)).toBe(4);
});
