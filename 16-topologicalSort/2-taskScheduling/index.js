const func = (tasks, list) => {
  const map = new Map();
  const toSet = new Set();
  list.forEach(([from, to]) => {
    const set = map.get(from) ?? new Set();
    set.add(to);
    map.set(from, set);
    toSet.add(to);
  });

  const answer = new Set();
  for (const [key, val] of map) {
    if (toSet.has(key) === false) {
      answer.add(key);
    }
  }
  return answer.size !== 0;
};

export default func;
