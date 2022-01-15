const func = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (overlap(arr[i], arr[i - 1])) {
      return false;
    }
  }
  return true;
};

const overlap = (arr1, arr2) => {
  return Math.min(arr2[1], arr1[1]) - Math.max(arr2[0], arr1[0]) >= 0;
};

export default func;
