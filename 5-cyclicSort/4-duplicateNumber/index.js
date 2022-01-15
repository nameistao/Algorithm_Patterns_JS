const func = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      let ind = arr[i] - 1;
      if (arr[ind] === arr[i]) {
        return arr[i];
      }

      [arr[i], arr[ind]] = [arr[ind], arr[i]];
    }
  }
};

export default func;
