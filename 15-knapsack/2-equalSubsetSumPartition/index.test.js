import func from "./index.js";

test("test 1", () => {
  expect(func([1, 2, 3, 4])).toBe(true);
});

test("test 2", () => {
  expect(func([1, 1, 3, 4, 7])).toBe(true);
});

test("test 2", () => {
  expect(func([2, 3, 4, 6])).toBe(false);
});
