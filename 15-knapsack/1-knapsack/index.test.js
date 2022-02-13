import func from "./index.js";

test("test 1", () => {
  expect(func([1, 6, 10, 16], [1, 2, 3, 5], 6)).toBe(17);
});

test("test 2", () => {
  expect(func([1, 6, 10, 16], [1, 2, 3, 5], 7)).toBe(22);
});
