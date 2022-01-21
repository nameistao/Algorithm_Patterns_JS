import func from "./index.js";

test("test 1", () => {
  expect(func(1)).toEqual(new Set(["()"]));
});

test("test 2", () => {
  expect(func(2)).toEqual(new Set(["(())", "()()"]));
});

test("test 3", () => {
  expect(func(3)).toEqual(
    new Set(["((()))", "(()())", "(())()", "()(())", "()()()"])
  );
});
