const func = (nums, sum) => {
  const arr = new Array(nums.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(sum + 1);
    arr[i][0] = true;
  }

  for (let i = 1; i <= sum; i++) {
    if (i === nums[0]) {
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

  return arr[arr.length - 1][arr[0].length - 1];
};

export default func;
