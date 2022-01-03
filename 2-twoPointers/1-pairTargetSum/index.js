const func = (arr, target) => {
  let p1 = 0,
    p2 = arr.length - 1;

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];
    if (sum > target) {
      p2--;
    } else if (sum < target) {
      p1++;
    } else {
      return [p1, p2];
    }
  }
};

export default func;
