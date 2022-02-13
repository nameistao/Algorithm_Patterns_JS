const func = (vertices, edges) => {
  const map = new Map();
  const tos = new Set();
  edges.forEach(([from, to]) => {
    const toSet = map.get(to) ?? new Set();
    toSet.add(from);
    map.set(to, toSet);

    const fromSet = map.get(from) ?? new Set();
    fromSet.add(to);
    map.set(from, fromSet);

    tos.add(to);
  });

  const answer = new Set();
  for (const [key, value] of map) {
    if (tos.has(key) === false) {
      answer.add(key);
    }
  }

  for (const key of answer) {
    Array.from(map.get(key)).forEach((elem) => answer.add(elem));
  }

  return Array.from(answer);
};

export default func;
