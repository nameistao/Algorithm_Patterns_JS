const func = (str, k) => {
  const map = new Map();
  let maxSoFar = 0,
    start = 0,
    end = 0,
    max = 0;

  for (const c of str) {
    const charCount = map.get(c) ?? 0;
    map.set(c, charCount + 1);
    maxSoFar = Math.max(maxSoFar, map.get(c));
    end++;

    while (end - start - maxSoFar > k) {
      const startCount = map.get(str[start]);
      if (startCount === 1) {
        map.delete(str[start]);
      } else {
        map.set(startCount - 1);
      }
      start++;
    }

    max = Math.max(end - start);
  }

  return max;
};

export default func;
