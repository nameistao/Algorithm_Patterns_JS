import func from "./index.js";

test("test 1", () => {
  expect(func([-2, 0, 1, 2], 2)).toBe(1);
});

test("test 2", () => {
  expect(func([-3, -1, 1, 2], 1)).toBe(0);
});

test("test 3", () => {
  expect(func([1, 0, 1, 1], 100)).toBe(3);
});

test("test 4", () => {
  expect(func([101, 99, 0, 0], 100)).toBe(99);
});
