const func = (num) => {
  let arr = ["()"];
  let i = 1;
  while (i < num) {
    const set = new Set();

    arr.forEach((elem) => {
      set.add("()" + elem);
      set.add(elem + "()");
      set.add("(" + elem + ")");
    });

    arr = Array.from(set);
    i++;
  }

  return new Set(arr);
};

export default func;
