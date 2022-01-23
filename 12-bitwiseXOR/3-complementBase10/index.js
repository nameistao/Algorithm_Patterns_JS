const func = (num) => {
  let inc = 1;
  let allOnes = 0;
  while (allOnes < num) {
    allOnes += inc;
    inc *= 2;
  }
  return allOnes ^ num;
};

export default func;
