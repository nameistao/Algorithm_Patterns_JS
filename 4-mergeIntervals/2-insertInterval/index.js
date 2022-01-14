const func = (arr, newInterval) => {
  let added = false;
  for (let i = 0; i < arr.length; i++) {
    if (newInterval[0] < arr[i][0]) {
      arr.splice(i, 0, [...newInterval]);
      added = true;
      break;
    }
  }
  if (added === false) {
    arr.push([...newInterval]);
  }

  const answer = [];
  let cur = [...arr[0]];
  arr.forEach((elem) => {
    if (overlap(cur, elem)) {
      cur = merge(elem, cur);
    } else {
      answer.push([...cur]);
      cur = elem;
    }
  });

  answer.push([...cur]);

  return answer;
};

const overlap = (intervalA, intervalB) => {
  const start = Math.max(intervalA[0], intervalB[0]);
  const end = Math.min(intervalA[1], intervalB[1]);
  return end - start > 0;
};

const merge = (intervalA, intervalB) => {
  const start = Math.min(intervalA[0], intervalB[0]);
  const end = Math.max(intervalA[1], intervalB[1]);
  return [start, end];
};

export default func;
