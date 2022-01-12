const func = (arr) => {
  let ind = 0;

  arr.forEach((elem, index) => {
    if (elem === 0) {
      [arr[index], arr[ind]] = [arr[ind], arr[index]];
      ind++;
    }
  });

  arr.forEach((elem, index) => {
    if (elem === 1) {
      [arr[index], arr[ind]] = [arr[ind], arr[index]];
      ind++;
    }
  });

  return arr;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export default func;
