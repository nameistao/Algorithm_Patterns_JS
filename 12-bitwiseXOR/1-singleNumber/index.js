const func = (arr) => {
  let answer = 0;
  for (const num of arr) {
    answer ^= num;
  }
  return answer;
};

export default func;
