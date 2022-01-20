const func = (str) => {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const temp = [];
    if (i === 0) {
      if (c >= "0" && c <= "9") {
        temp.push(c);
      } else {
        temp.push(c.toLowerCase());
        temp.push(c.toUpperCase());
      }
    } else if (c >= "0" && c <= "9") {
      answer.forEach((elem) => {
        temp.push(elem + c);
      });
    } else {
      answer.forEach((elem) => {
        temp.push(elem + c.toLowerCase());
      });
      answer.forEach((elem) => {
        temp.push(elem + c.toUpperCase());
      });
    }
    answer = temp;
  }
  return answer;
};

export default func;
