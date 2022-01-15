const func = (arr) => {
  arr = cyclicSort(arr);
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      answer.push(i + 1);
    }
  }

  return answer;
};

const cyclicSort = (arr) => {
  arr.forEach((elem, index) => {
    while (arr[index] !== index + 1) {
      let ind = arr[index] - 1;
      if (arr[index] === arr[ind]) {
        break;
      }

      [arr[index], arr[ind]] = [arr[ind], arr[index]];
    }
  });

  return arr;
};

export default func;
