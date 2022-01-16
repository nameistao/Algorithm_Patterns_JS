const func = (head, p, q) => {
  let endOfFirstPart;
  let lastOfReverse;
  let startOfLastPart;
  let cur = head;
  let i = 0;

  while (cur != null) {
    i++;
    if (i + 1 === p) {
      endOfFirstPart = cur;
    }

    if (i === p) {
      lastOfReverse = cur;
    }

    if (i === q + 1) {
      startOfLastPart = cur;
    }

    cur = cur.next;
  }

  if (endOfFirstPart == null) {
    head = reverse(lastOfReverse, q - p + 1);
  } else {
    endOfFirstPart.next = reverse(lastOfReverse, q - p + 1);
  }

  lastOfReverse.next = startOfLastPart;

  return head;
};

const reverse = (head, num) => {
  let cur = head,
    prev = null,
    next,
    i = 0;

  while (cur != null && i < num) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  return prev;
};

export default func;
