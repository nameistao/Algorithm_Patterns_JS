const func = (head) => {
  let fast = head,
    slow = head;
  while (fast != null) {
    if (fast.next == null) {
      break;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.value;
};

export default func;
