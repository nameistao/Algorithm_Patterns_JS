const func = (num) => {
  let arr = [["", 0, 0]];

  while (arr.length) {
    const temp = [];
    for (const inner of arr) {
      const [string, open, closed] = inner;

      if (open < num) {
        temp.push([string + "(", open + 1, closed]);
      }

      if (closed < open) {
        temp.push([string + ")", open, closed + 1]);
      }
    }
    arr = temp;
    if (arr.every((elem) => elem[2] === num)) {
      break;
    }
  }

  return new Set(arr.map((elem) => elem[0]));
};

export default func;
