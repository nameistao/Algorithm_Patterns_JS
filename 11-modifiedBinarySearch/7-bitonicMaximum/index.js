const func = (arr) => {
  let l = 0,
    r = arr.length - 1,
    mid;

  while (l <= r) {
    console.log("here");
    mid = Math.floor((l + r) / 2);
    console.log(arr[mid]);
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
