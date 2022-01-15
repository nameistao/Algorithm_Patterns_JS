import func from "./index.js";

test("test 1", () => {
  expect(func([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
});

test("test 2", () => {
  expect(func([2, 6, 4, 3, 1, 5])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("test 3", () => {
  expect(func([1, 5, 6, 4, 3, 2])).toEqual([1, 2, 3, 4, 5, 6]);
});
