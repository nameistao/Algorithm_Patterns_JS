const func = (arr, key) => {
  let l = 0,
    r = arr.length - 1,
    mid,
    diff = Number.MAX_SAFE_INTEGER,
    cur;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (Math.abs(key - arr[mid]) < diff) {
      diff = Math.min(diff, Math.abs(key - arr[mid]));
      cur = arr[mid];
    }

    if (arr[mid] === key) {
      return arr[mid];
    } else if (arr[mid] < key) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return cur;
};

export default func;
