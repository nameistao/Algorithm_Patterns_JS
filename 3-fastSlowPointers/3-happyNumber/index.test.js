import func from "./index.js";

test("test 1", () => {
  expect(func(23)).toBe(true);
});

test("test 2", () => {
  expect(func(12)).toBe(false);
});
