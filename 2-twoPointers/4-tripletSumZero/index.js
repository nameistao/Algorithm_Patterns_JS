const func = (arr) => {
  const output = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let p1 = i + 1,
      p2 = arr.length - 1;

    while (p1 < p2) {
      if (arr[p1] + arr[p2] === -arr[i]) {
        if (
          !output.find(
            (elem) => String(elem) === String([arr[i], arr[p1], arr[p2]])
          )
        ) {
          output.push([arr[i], arr[p1], arr[p2]]);
        }

        p1++;
      } else if (arr[p1] + arr[p2] > -arr[i]) {
        p2--;
      } else {
        p1++;
      }
    }
  }

  return output.sort((first, second) => first[0] - second[0]);
};

export default func;
