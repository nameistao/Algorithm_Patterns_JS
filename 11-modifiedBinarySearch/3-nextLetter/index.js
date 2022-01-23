const func = (arr, key) => {
  let l = 0,
    r = arr.length - 1,
    mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === key) {
      return arr[mid + 1] ?? arr[0];
    } else if (arr[mid] < key) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return arr[mid + 1] ?? arr[0];
};

export default func;
