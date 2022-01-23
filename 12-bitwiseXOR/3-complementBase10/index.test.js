import func from "./index.js";

test("test 1", () => {
  expect(func(8)).toBe(7);
});

test("test 2", () => {
  expect(func(10)).toBe(5);
});
