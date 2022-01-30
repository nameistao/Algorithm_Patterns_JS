import func from "./index.js";

test("test 1", () => {
  expect(func([7, 3, 5, 8, 5, 3, 3], 2)).toBe(3);
});

test("test 2", () => {
  expect(func([3, 5, 12, 11, 12], 3)).toBe(2);
});

test("test 3", () => {
  expect(func([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)).toBe(3);
});