const func = (arr, key) => {
  const asc = arr[0] < arr[arr.length - 1];
  let l = 0,
    r = arr.length - 1,
    mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if ((arr[mid] < key && asc) || (arr[mid] > key && !asc)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

export default func;
