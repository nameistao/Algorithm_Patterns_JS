const func = (arr) => {
  let start = 0;

  arr.forEach((elem) => {
    if (elem !== arr[start]) {
      start++;
      arr[start] = elem;
    }
  });

  return start + 1;
};

export default func;
