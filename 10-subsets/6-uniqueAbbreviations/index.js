const func = (word) => {
  let answer = [""];

  for (const char of word) {
    const newAnswer = [];

    for (const string of answer) {
      newAnswer.push(string + char);
      if (
        string.substring(string.length - 1) >= "0" &&
        string.substring(string.length - 1) <= "9"
      ) {
        newAnswer.push(
          string.substring(0, string.length - 1) +
            String(Number(string[string.length - 1]) + 1)
        );
      } else {
        newAnswer.push(string + "1");
      }
    }

    answer = newAnswer;
  }

  return answer;
};

export default func;
