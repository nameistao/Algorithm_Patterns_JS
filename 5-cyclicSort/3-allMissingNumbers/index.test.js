import func from "./index.js";

test("test 1", () => {
  expect(func([2, 3, 1, 8, 2, 3, 5, 1])).toEqual([4, 6, 7]);
});

test("test 2", () => {
  expect(func([2, 4, 1, 2])).toEqual([3]);
});

test("test 3", () => {
  expect(func([2, 3, 2, 1])).toEqual([4]);
});
