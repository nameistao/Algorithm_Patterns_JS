const func = (str) => {
  const map = new Map();
  let start = 0,
    end = 0,
    longest = 0;

  for (const c of str) {
    const charCount = map.get(c) ?? 0;
    map.set(c, charCount + 1);
    end++;

    while (map.get(c) > 1) {
      const startCount = map.get(str[start]);
      if (startCount === 1) {
        map.delete(str[start]);
      } else {
        map.set(str[start], startCount - 1);
      }
      start++;
    }

    longest = Math.max(longest, end - start);
  }

  return longest;
};

export default func;
