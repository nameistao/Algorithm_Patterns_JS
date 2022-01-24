import func from "./index.js";

test("test 1", () => {
  expect(func([3, 1, 5, 12, 2, 11], 3)).toEqual(new Set([5, 12, 11]));
});

test("test 2", () => {
  expect(func([3, 1, 5, 12, 2, 11], 3)).toEqual(new Set([5, 12, 11]));
});
