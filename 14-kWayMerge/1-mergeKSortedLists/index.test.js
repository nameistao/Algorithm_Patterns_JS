import func from "./index.js";

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

test("test 1", () => {
  const l1 = new ListNode(2);
  l1.next = new ListNode(6);
  l1.next.next = new ListNode(8);

  const l2 = new ListNode(3);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(7);

  const l3 = new ListNode(1);
  l3.next = new ListNode(3);
  l3.next.next = new ListNode(4);

  let head = func([l1, l2, l3]);

  const arr = [];
  while (head != null) {
    arr.push(head.value);
    head = head.next;
  }

  expect(arr).toEqual([1, 2, 3, 3, 4, 6, 6, 7, 8]);
});
