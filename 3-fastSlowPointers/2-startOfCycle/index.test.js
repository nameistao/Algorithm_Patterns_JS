import func from "./index";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;

test("test 1", () => {
  expect(func(head)).toBe(3);
});

test("test 2", () => {
  head.next.next.next.next.next.next = head.next.next.next;
  expect(func(head)).toBe(4);
});

test("test 3", () => {
  head.next.next.next.next.next.next = head;
  expect(func(head)).toBe(1);
});
