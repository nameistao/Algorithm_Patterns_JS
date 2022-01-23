import func from "./index.js";

test("test 1", () => {
  expect(func([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])).toEqual(new Set([4, 6]));
});

test("test 2", () => {
  expect(func([2, 1, 3, 2])).toEqual(new Set([1, 3]));
});
