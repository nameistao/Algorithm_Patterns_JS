const func = (arr) => {
  const map = new Map();
  let start = 0,
    max = 0;

  arr.forEach((elem, index) => {
    const count = map.get(elem) ?? 0;
    map.set(elem, count + 1);

    if (map.size > 2) {
      const count = map.get(arr[start]);
      if (count === 1) {
        map.delete(arr[start]);
      } else {
        map.set(arr[start], count - 1);
      }
      start++;
    }

    max = Math.max(max, index - start + 1);
  });

  return max;
};

export default func;
