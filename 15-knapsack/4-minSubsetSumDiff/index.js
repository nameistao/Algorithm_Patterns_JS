const func = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const cols = Math.floor(sum / 2) + 1;
  const arr = new Array(nums.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
    arr[i][0] = true;
  }

  for (let i = 1; i < cols; i++) {
    if (nums[0] === i) {
      arr[0][i] = true;
    } else {
      arr[0][i] = false;
    }
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i - 1][j] === true) {
        arr[i][j] = true;
      } else if (arr[i - 1][j - nums[i]] === true) {
        arr[i][j] = true;
      } else {
        arr[i][j] = false;
      }
    }
  }

  let max = 0;
  for (let i = 0; i < cols; i++) {
    if (arr[arr.length - 1][i] === true) {
      max = i;
    }
  }

  let otherNum = sum - max;
  return Math.abs(otherNum - max);
};

export default func;
