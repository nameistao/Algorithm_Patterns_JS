const func = (arr) => {
  let l = 0,
    r = arr.length - 1,
    mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (
      arr[mid] > (arr[mid - 1] ?? Number.MIN_SAFE_INTEGER) &&
      arr[mid] > (arr[mid + 1] ?? Number.MIN_SAFE_INTEGER)
    ) {
      return arr[mid];
    } else if (arr[mid] > arr[mid - 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return arr[mid];
};

export default func;
