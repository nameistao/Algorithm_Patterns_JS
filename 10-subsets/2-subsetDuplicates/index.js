const func = (arr) => {
  const answer = [[]];
  let last = [];

  for (let i = 0; i < arr.length; i++) {
    const temp = [];
    if (i > 0 && arr[i] === arr[i - 1]) {
      for (const inner of last) {
        temp.push([...inner, arr[i]]);
      }
    } else {
      for (const inner of answer) {
        temp.push([...inner, arr[i]]);
      }
    }
    answer.push(...temp);
    last = temp;
  }

  return answer;
};

export default func;
