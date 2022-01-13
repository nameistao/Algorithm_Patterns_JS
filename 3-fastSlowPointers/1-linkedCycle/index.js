const func = (head) => {
  let fast = head;
  while (fast != null) {
    if (fast.next.next != null) {
      fast = fast.next.next;
    } else {
      fast = null;
    }
    head = head.next;

    if (fast === head) {
      return true;
    }
  }
  return false;
};

export default func;
