const func = (arr, k) => {
  let count = 0,
    start = 0,
    max = 0;

  arr.forEach((elem, index) => {
    if (elem === 0) {
      count++;
    }

    while (count > k) {
      if (arr[start++] === 0) {
        count--;
      }
    }

    max = Math.max(max, index - start + 1);
  });

  return max;
};

export default func;
