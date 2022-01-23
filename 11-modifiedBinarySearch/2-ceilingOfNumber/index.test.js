import func from "./index.js";

test("test 1", () => {
  expect(func([4, 6, 10], 6)).toBe(1);
});

test("test 2", () => {
  expect(func([1, 3, 8, 10, 15], 12)).toBe(4);
});

test("test 3", () => {
  expect(func([4, 6, 10], 17)).toBe(-1);
});

test("test 4", () => {
  expect(func([4, 6, 10], -1)).toBe(0);
});

test("test 5", () => {
  expect(func([4, 6, 10], 10)).toBe(2);
});
