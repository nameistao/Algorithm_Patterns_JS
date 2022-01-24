import func from "./index.js";

test("test 1", () => {
  expect(func([1, 3, 11, 5])).toBe(33);
});

test("test 2", () => {
  expect(func([3, 4, 5, 6])).toBe(36);
});

test("test 3", () => {
  expect(func([1, 3, 11, 5, 2])).toBe(42);
});
