import func from "./index.js";

test("test 1", () => {
  expect(func([1, 3, 5, 12, 11, 12, 11], 2)).toEqual([12, 11]);
});

test("test 2", () => {
  expect(func([5, 12, 11, 3, 11], 2)).toEqual([11, 3]);
});
