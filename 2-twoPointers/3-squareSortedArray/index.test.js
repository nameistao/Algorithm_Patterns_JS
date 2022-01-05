import func from "./index.js";

test("test 1", () => {
  expect(func([-2, -1, 0, 2, 3])).toEqual([0, 1, 4, 4, 9]);
});

test("test 2", () => {
  expect(func([-3, -1, 0, 1, 2])).toEqual([0, 1, 1, 4, 9]);
});
