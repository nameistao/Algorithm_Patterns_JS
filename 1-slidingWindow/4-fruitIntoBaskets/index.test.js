import func from "./index.js";

test("test 1", () => {
  expect(func(["A", "B", "C", "A", "C"])).toBe(3);
});

test("test 2", () => {
  expect(func(["A", "B", "C", "B", "B", "C"])).toBe(5);
});

test("test 3", () => {
  expect(func([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toBe(5);
});
