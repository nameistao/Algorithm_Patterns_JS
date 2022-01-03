const func = (arr, target) => {
  let diff = Number.MAX_SAFE_INTEGER,
    curSum = Number.MAX_SAFE_INTEGER;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let p1 = i + 1,
      p2 = arr.length - 1;

    while (p1 < p2) {
      const sum = arr[i] + arr[p1] + arr[p2];
      if (Math.abs(target - sum) < diff) {
        diff = Math.abs(target - sum);
        curSum = sum;
      } else if (Math.abs(target - sum) === diff) {
        curSum = Math.min(curSum, sum);
      }

      if (sum > target) {
        p2--;
      } else {
        p1++;
      }
    }
  }

  return curSum;
};

export default func;
