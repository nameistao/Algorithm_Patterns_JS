const func = (arr, key) => {
  let l = 0,
    r = arr.length - 1,
    mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return arr[mid] >= key ? mid : -1;
};

export default func;
