import func from "./index.js";

test("test 1", () => {
  expect(func([1, 3, 8, 12, 4, 2])).toBe(12);
});

test("test 2", () => {
  expect(func([3, 8, 3, 1])).toBe(8);
});

test("test 3", () => {
  expect(func([1, 3, 8, 12])).toBe(12);
});

test("test 4", () => {
  expect(func([10, 9, 8])).toBe(10);
});
