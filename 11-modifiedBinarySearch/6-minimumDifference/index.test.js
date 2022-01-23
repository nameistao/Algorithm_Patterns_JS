import func from "./index.js";

test("test 1", () => {
  expect(func([4, 6, 10], 7)).toBe(6);
});

test("test 2", () => {
  expect(func([4, 6, 10], 4)).toBe(4);
});

test("test 3", () => {
  expect(func([1, 3, 8, 10, 15], 12)).toBe(10);
});

test("test 4", () => {
  expect(func([4, 6, 10], 17)).toBe(10);
});
