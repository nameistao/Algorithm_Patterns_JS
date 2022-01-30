import func from "./index.js";

test("test 1", () => {
  expect(func([5, 6, 7, 8, 9], 3, 7)).toEqual(new Set([6, 7, 8]));
});

test("test 2", () => {
  expect(func([2, 4, 5, 6, 9], 3, 6)).toEqual(new Set([4, 5, 6]));
});

test("test 3", () => {
  expect(func([2, 4, 5, 6, 9], 3, 10)).toEqual(new Set([5, 6, 9]));
});
