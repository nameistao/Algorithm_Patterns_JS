import func from "./index.js";

test("test 1", () => {
  expect(func("aabccbb", 2)).toBe(5);
});

test("test 2", () => {
  expect(func("abbcb", 1)).toBe(4);
});

test("test 3", () => {
  expect(func("abccde", 1)).toBe(3);
});
