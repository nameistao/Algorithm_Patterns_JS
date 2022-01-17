import func from "./index.js";

test("test 1", () => {
  expect(func([1, 2, -1, 3, 5], 2)).toEqual([1.5, 0.5, 1.0, 4.0]);
});

test("test 2", () => {
  expect(func([1, 2, 3, 4, 5], 3)).toEqual([2, 3, 4]);
});
