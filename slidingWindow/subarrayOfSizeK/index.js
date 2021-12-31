const func = (arr, size) => {
  let total = 0;
  let max = 0;

  arr.forEach((elem, ind) => {
    total += elem;

    if (ind >= size - 1) {
      max = Math.max(max, total);
    }

    if (ind - size + 1 >= 0) {
      total -= arr[ind - size + 1];
    }
  });

  return max;
};

export default func;
