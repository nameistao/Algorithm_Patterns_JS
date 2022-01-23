import func from "./index.js";

test("test 1", () => {
  expect(func([4, 6, 6, 6, 9], 6)).toEqual([1, 3]);
});

test("test 2", () => {
  expect(func([1, 3, 8, 10, 15], 10)).toEqual([3, 3]);
});

test("test 3", () => {
  expect(func([1, 3, 8, 10, 15], 12)).toEqual([-1, -1]);
});

test("test 4", () => {
  expect(func([3, 3, 3, 10, 15], 3)).toEqual([0, 2]);
});
