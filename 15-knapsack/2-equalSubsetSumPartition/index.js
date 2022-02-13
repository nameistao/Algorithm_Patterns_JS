const func = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2 === 1) return false;
  const arr = new Array(nums.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(sum / 2 + 1);
    arr[i][0] = true;
  }

  for (let i = 1; i < sum / 2 + 1; i++) {
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

  return arr[arr.length - 1][arr[0].length - 1];
};

export default func;
