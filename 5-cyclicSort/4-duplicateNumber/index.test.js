import func from "./index.js";

test("test 1", () => {
  expect(func([1, 4, 4, 3, 2])).toBe(4);
});

test("test 2", () => {
  expect(func([2, 1, 3, 3, 5, 4])).toBe(3);
});

test("test 3", () => {
  expect(func([2, 4, 1, 4, 4])).toBe(4);
});
