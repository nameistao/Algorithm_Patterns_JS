const func = (head, k) => {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head,
    previous = null;
  while (true) {
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node
    let i = 0;

    while (current !== null && i < k) {
      // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }
    // connect with the next part
    last_node_of_sub_list.next = current;

    if (current === null) {
      break;
    }
    previous = last_node_of_sub_list;
  }
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
