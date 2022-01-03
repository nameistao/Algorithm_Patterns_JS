import func from "./index.js";

test("test 1", () => {
  expect(String(func([1, 2, 3, 4, 6], 6))).toBe(String([1, 3]));
});
