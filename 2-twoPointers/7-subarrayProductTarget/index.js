const func = (arr, target) => {
  let mult = 1,
    start = 0;
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];

    while (start < i && mult >= target) {
      mult /= arr[start];
      start++;
    }

    let temp = [];
    for (let j = i; j >= start; j--) {
      temp.push(arr[j]);
      temp.reverse();
      answer.push([...temp]);
    }
  }

  return answer;
};

export default func;
