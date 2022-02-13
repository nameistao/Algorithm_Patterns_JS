import func from "./index.js";

test("test 1", () => {
  expect(func([1, 2, 3, 7], 6)).toBe(true);
});

test("test 2", () => {
  expect(func([1, 2, 7, 1, 5], 10)).toBe(true);
});

test("test 3", () => {
  expect(func([1, 3, 4, 8], 6)).toBe(false);
});
