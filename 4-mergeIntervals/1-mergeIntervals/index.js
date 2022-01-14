const func = (arr) => {
  const answer = [];
  arr.sort((a, b) => a[0] - b[0]);

  let cur = [...arr[0]];

  arr.forEach((elem) => {
    if (overlap(cur, elem)) {
      cur = merge(cur, elem);
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
