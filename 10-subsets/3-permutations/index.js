const func = (arr) => {
  let answer = [[arr[0]]];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    const temp = [];

    for (const inner of answer) {
      //temp.push(num, ...inner);
      for (let j = 0; j < inner.length + 1; j++) {
        temp.push([...inner.slice(0, j), num, ...inner.slice(j)]);
      }
      //temp.push(...inner, num);
    }
    console.log(temp);
    answer = temp;
  }

  return new Set(answer);
};

export default func;
