const func = (arr) => {
  arr = cyclicSort(arr);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  return arr.length;
};

const cyclicSort = (arr) => {
  arr.forEach((elem, index) => {
    while (arr[index] != index) {
      if (arr[index] >= arr.length) {
        return;
      }

      let ind = arr[index];
      [arr[index], arr[ind]] = [arr[ind], arr[index]];
    }
  });

  return arr;
};

export default func;
