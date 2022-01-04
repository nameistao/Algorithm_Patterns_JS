import func from "./index.js";

test("test 1", () => {
  expect(func([-1, 0, 2, 3], 3)).toBe(2);
});

test("test 2", () => {
  expect(func([-1, 4, 2, 1, 3], 5)).toBe(4);
});
