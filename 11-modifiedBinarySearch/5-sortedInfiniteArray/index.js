const func = (arr, key) => {
  let end = 0,
    start,
    inc = 1,
    mid;

  while (arr[end] && arr[end] < key) {
    start = end + 1;
    end += inc;
    inc *= 2;
  }

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

export default func;
