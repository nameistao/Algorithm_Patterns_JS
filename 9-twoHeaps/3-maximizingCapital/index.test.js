import func from "./index.js";

test("test 1", () => {
  expect(func([0, 1, 2], [1, 2, 3], 2, 1)).toBe(6);
});

test("test 2", () => {
  expect(func([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)).toBe(8);
});
