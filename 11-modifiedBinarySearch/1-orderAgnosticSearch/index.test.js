import func from "./index.js";

test("test 1", () => {
  expect(func([4, 6, 10], 10)).toBe(2);
});

test("test 2", () => {
  expect(func([1, 2, 3, 4, 5, 6, 7], 5)).toBe(4);
});

test("test 3", () => {
  expect(func([10, 6, 4], 10)).toBe(0);
});

test("test 4", () => {
  expect(func([10, 6, 4], 4)).toBe(2);
});
