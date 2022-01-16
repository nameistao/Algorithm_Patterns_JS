const func = (arr) => {
  arr.forEach((elem, index) => {
    while (arr[index] !== index + 1) {
      let ind = arr[index] - 1;
      [arr[index], arr[ind]] = [arr[ind], arr[index]];
    }
  });

  return arr;
};

export default func;
