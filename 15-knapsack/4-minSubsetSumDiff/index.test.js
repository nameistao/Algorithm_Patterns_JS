import func from "./index.js";

test("test 1", () => {
  expect(func([1, 2, 3, 9])).toBe(3);
});

test("test 2", () => {
  expect(func([1, 2, 7, 1, 5])).toBe(0);
});

test("test 3", () => {
  expect(func([1, 3, 100, 4])).toBe(92);
});
