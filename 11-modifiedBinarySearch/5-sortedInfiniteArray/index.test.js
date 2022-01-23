import func from "./index.js";

test("test 1", () => {
  expect(func([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 16)).toBe(
    6
  );
});

test("test 2", () => {
  expect(func([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 11)).toBe(
    -1
  );
});

test("test 3", () => {
  expect(func([1, 3, 8, 10, 15], 15)).toBe(4);
});

test("test 4", () => {
  expect(func([1, 3, 8, 10, 15], 200)).toBe(-1);
});
