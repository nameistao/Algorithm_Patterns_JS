const func = (profits, weights, capacity) => {
  const arr = new Array(profits.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(capacity + 1);
  }

  for (let i = 0; i < profits.length; i++) {
    arr[i][0] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      if (i === 0) {
        if (weights[i] <= j) {
          arr[i][j] = profits[i];
        }
      } else {
        if (j - weights[i] >= 0) {
          arr[i][j] = Math.max(
            arr[i - 1][j],
            profits[i] + arr[i - 1][j - weights[i]]
          );
        } else {
          arr[i][j] = arr[i - 1][j];
        }
      }
    }
  }

  return arr[arr.length - 1][arr[0].length - 1];
};

export default func;
