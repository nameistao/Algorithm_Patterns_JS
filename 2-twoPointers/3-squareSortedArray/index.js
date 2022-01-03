const func = (arr) => {
  const output = [];
  let p1 = 0,
    p2 = arr.length - 1;

  while (p1 <= p2) {
    const leftSquared = Math.pow(arr[p1], 2);
    const rightSquared = Math.pow(arr[p2], 2);

    if (leftSquared > rightSquared) {
      output.push(leftSquared);
      p1++;
    } else {
      output.push(rightSquared);
      p2--;
    }
  }

  return output.reverse();
};

export default func;
