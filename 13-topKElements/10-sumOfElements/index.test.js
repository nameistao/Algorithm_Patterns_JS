import func from "./index.js";

test("test 1", () => {
  expect(func([1, 3, 12, 5, 15, 11], 3, 6)).toBe(23);
});

test("test 2", () => {
  expect(func([3, 5, 8, 7], 1, 4)).toBe(12);
});
