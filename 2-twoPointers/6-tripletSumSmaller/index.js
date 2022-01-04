const func = (arr, target) => {
  let count = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let p1 = i + 1,
      p2 = arr.length - 1;

    while (p1 < p2) {
      if (arr[i] + arr[p1] + arr[p2] < target) {
        count += p2 - p1;
        p1++;
      } else {
        p2--;
      }
    }
  }

  return count;
};

export default func;
