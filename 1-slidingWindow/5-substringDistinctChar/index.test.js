import func from "./index.js";

test("test 1", () => {
  expect(func("aabccbb")).toBe(3);
});

test("test 2", () => {
  expect(func("abbbb")).toBe(2);
});

test("test 3", () => {
  expect(func("abccde")).toBe(3);
});
