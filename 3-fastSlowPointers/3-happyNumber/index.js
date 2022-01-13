const func = (num) => {
  let fast = num,
    slow = num;

  while (fast !== 1) {
    fast = next(next(fast));
    slow = next(slow);

    if (fast === slow) {
      return false;
    }
  }

  return true;
};

const next = (num) => {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }

  return sum;
};

export default func;
