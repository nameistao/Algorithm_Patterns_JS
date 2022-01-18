const func = (arr) => {
  const answer = [[]];

  for (let i = 0; i < arr.length; i++) {
    const temp = [];
    for (const inner of answer) {
      temp.push([...inner, arr[i]]);
    }
    answer.push(...temp);
  }

  return answer;
};

export default func;
