const func = (tasks, list) => {
  const fromMap = new Map();
  const toMap = new Map();
  list.forEach(([from, to]) => {
    const set = fromMap.get(from) ?? new Set();
    set.add(to);
    fromMap.set(from, set);

    const num = toMap.get(to) ?? 0;
    toMap.set(to, num + 1);
  });

  const answer = new Set();
  for (const [key, val] of fromMap) {
    if (toMap.has(key) === false) {
      answer.add(key);
    }
  }
  if (answer.size === 0) return [];

  for (const key of answer) {
    if (fromMap.get(key) != null) {
      const fromSet = fromMap.get(key);
      for (const innerKey of fromSet) {
        toMap.set(innerKey, toMap.get(innerKey) - 1);
        if (toMap.get(innerKey) === 0) {
          answer.add(innerKey);
          toMap.delete(innerKey);
        }
      }
    }
  }

  return Array.from(answer);
};

export default func;
