const func = (arr, key) => {
  let l = 0,
    r = arr.length - 1,
    mid,
    found = false;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === key) {
      found = true;
      break;
    } else if (arr[mid] < key) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  if (found === false) {
    return [-1, -1];
  }

  let hi;

  (l = 0), (r = arr.length - 1);

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] <= key) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  hi = mid;

  let lo;

  (l = 0), (r = arr.length - 1);

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] >= key) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  lo = mid;

  return [lo, hi - 1];
};

export default func;
