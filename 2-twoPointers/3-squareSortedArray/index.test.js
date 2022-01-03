import func from "./index.js";

test("test 1", () => {
  expect(String(func([-2, -1, 0, 2, 3]))).toBe(String([0, 1, 4, 4, 9]));
});

test("test 2", () => {
  expect(String(func([-3, -1, 0, 1, 2]))).toBe(String([0, 1, 1, 4, 9]));
});
