import func from "./index.js";

test("test 1", () => {
  expect(func([1, 4, 2, 1, 3, 2, 3])).toBe(4);
});

test("test 2", () => {
  expect(func([7, 9, 7])).toBe(9);
});
