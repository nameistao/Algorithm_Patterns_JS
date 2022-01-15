import func from "./index.js";

test("test 1", () => {
  expect(func([4, 0, 3, 1])).toBe(2);
});

test("test 2", () => {
  expect(func([8, 3, 5, 2, 4, 6, 0, 1])).toBe(7);
});
