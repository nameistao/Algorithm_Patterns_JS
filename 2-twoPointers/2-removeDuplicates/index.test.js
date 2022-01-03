import func from "./index.js";

test("test 1", () => {
  expect(func([2, 3, 3, 3, 6, 9, 9])).toBe(4);
});

test("test 2", () => {
  expect(func([2, 2, 2, 11])).toBe(2);
});
