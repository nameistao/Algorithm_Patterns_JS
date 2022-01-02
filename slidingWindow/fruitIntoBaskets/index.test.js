import func from "./index.js";

test("test 1", () => {
  expect(func(["A", "B", "C", "A", "C"])).toBe(3);
});

test("test 2", () => {
  expect(func(["A", "B", "C", "B", "B", "C"])).toBe(5);
});
