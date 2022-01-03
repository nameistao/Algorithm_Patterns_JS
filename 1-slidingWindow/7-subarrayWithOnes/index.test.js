import func from "./index.js";

test("test 1", () => {
  expect(func([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)).toBe(6);
});

test("test 2", () => {
  expect(func([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)).toBe(9);
});
