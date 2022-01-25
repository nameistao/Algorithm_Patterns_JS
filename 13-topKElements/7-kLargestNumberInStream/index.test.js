import Clazz from "./index.js";

test("test 1", () => {
  const clazz = new Clazz(4);
  const arr = [3, 1, 5, 12, 2, 11];
  arr.forEach((elem) => {
    clazz.add(elem);
  });
  clazz.add(6);
  expect(clazz.getKLargest()).toBe(5);
  clazz.add(13);
  expect(clazz.getKLargest()).toBe(6);
  clazz.add(4);
  expect(clazz.getKLargest()).toBe(6);
});
