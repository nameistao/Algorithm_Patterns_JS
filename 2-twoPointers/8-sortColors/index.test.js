import func from "./index.js";

test("test 1", () => {
  expect(func([1, 0, 2, 1, 0])).toEqual([0, 0, 1, 1, 2]);
});

test("test 2", () => {
  expect(func([2, 2, 0, 1, 2, 0])).toEqual([0, 0, 1, 2, 2, 2]);
});
