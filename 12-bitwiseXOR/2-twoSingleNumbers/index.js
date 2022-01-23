const func = (arr) => {
  const xor = arr.reduce((acc, elem) => acc ^ elem, 0);
  let rightBit;
  let cur = 1;

  while (true) {
    if (xor & cur) {
      rightBit = cur;
      break;
    }
    cur *= 2;
  }

  const arr1 = [],
    arr2 = [];

  for (const num of arr) {
    if (num & rightBit) {
      arr1.push(num);
    } else {
      arr2.push(num);
    }
  }

  const num1 = arr1.reduce((acc, elem) => acc ^ elem, 0);
  const num2 = arr2.reduce((acc, elem) => acc ^ elem, 0);
  return new Set([num1, num2]);
};

export default func;
