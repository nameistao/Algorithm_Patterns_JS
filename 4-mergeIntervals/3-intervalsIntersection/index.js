const func = (firstList, secondList) => {
  let i = 0,
    j = 0;
  const answer = [];

  while (i < firstList.length && j < secondList.length) {
    const arr1 = firstList[i];
    const arr2 = secondList[j];

    //if overlap
    if (Math.min(arr1[1], arr2[1]) - Math.max(arr1[0], arr2[0]) >= 0) {
      answer.push([Math.max(arr1[0], arr2[0]), Math.min(arr1[1], arr2[1])]);
    }

    if (arr1[1] < arr2[1]) {
      i++;
    } else {
      j++;
    }
  }

  return answer;
};

export default func;
