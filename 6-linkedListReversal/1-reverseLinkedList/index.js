const func = (head) => {
  let cur = head,
    prev = null,
    next;

  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

export default func;
