const func = (head) => {
  let fast = head,
    slow = head;
  do {
    fast = fast.next.next;
    slow = slow.next;
  } while (fast !== slow);

  slow = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value;
};

export default func;
