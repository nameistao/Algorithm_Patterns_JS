import func from "./index.js";

test("test 1", () => {
  expect(func([3, 4, 4, 5, 5])).toEqual([4, 5]);
});

test("test 2", () => {
  expect(func([5, 4, 7, 2, 3, 5, 3])).toEqual([3, 5]);
});
