const func = (arr, num) => {
  let smallest = Number.MAX_SAFE_INTEGER,
    total = 0,
    start = 0,
    end = 0;

  arr.forEach((elem) => {
    total += elem;
    end++;

    while (total >= num) {
      smallest = Math.min(smallest, end - start);
      total -= arr[start++];
    }
  });

  return smallest;
};

export default func;
