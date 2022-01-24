import func from "./index.js";

test("test 1", () => {
  expect(func([1, 5, 12, 2, 11, 5], 3)).toBe(5);
});

test("test 2", () => {
  expect(func([1, 5, 12, 2, 11, 5], 4)).toBe(5);
});

test("test 3", () => {
  expect(func([5, 12, 11, -1, 12], 3)).toBe(11);
});
