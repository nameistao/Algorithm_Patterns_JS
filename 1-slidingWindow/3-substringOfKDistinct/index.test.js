import func from "./index.js";

test("test 1", () => {
  expect(func("araaci", 2)).toBe(4);
});

test("test 2", () => {
  expect(func("araaci", 1)).toBe(2);
});

test("test 3", () => {
  expect(func("cbbebi", 3)).toBe(5);
});

test("test 4", () => {
  expect(func("cbbebi", 10)).toBe(6);
});
