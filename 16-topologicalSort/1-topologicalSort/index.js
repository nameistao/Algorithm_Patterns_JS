const func = (vertices, edges) => {
  const toMap = new Map();
  const fromMap = new Map();
  edges.forEach(([from, to]) => {
    const fromSet = fromMap.get(from) ?? new Set();
    fromSet.add(to);
    fromMap.set(from, fromSet);

    const toNum = toMap.get(to) ?? 0;
    toMap.set(to, toNum + 1);
  });

  const answer = new Set();
  for (const [key, value] of fromMap) {
    if (toMap.has(key) === false) {
      answer.add(key);
    }
  }

  for (const key of answer) {
    const fromSet = fromMap.get(key);
    if (fromSet != null) {
      for (const innerKey of fromSet) {
        let num = toMap.get(innerKey);
        toMap.set(innerKey, num - 1);
        if (num - 1 === 0) {
          answer.add(innerKey);
          toMap.delete(innerKey);
        }
      }
    }
  }

  return Array.from(answer);
};

export default func;
