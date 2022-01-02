const func = (str, k) => {
  const map = new Map();
  let longest = 0;
  let count = 0;
  let start = 0;

  for (const c of str) {
    if (map.has(c)) {
      const charCount = map.get(c);
      map.set(c, charCount + 1);
    } else {
      map.set(c, 1);
    }
    count++;

    if (map.size <= k) {
      longest = Math.max(count, longest);
    }

    while (map.size > k) {
      const char = str[start++];
      if (map.get(char) === 1) {
        map.delete(char);
      } else {
        const charCount = map.get(char);
        map.set(char, charCount - 1);
      }
      count--;
    }
  }

  return longest;
};

export default func;
