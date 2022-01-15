const func = (arr) => {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      let ind = arr[i] - 1;
      if (arr[ind] === arr[i]) {
        answer.push(arr[i]);
        break;
      }

      [arr[i], arr[ind]] = [arr[ind], arr[i]];
    }
  }

  return answer.sort();
};

export default func;
