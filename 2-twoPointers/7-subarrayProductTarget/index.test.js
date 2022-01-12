import func from "./index.js";

test("test 1", () => {
  expect(func([2, 5, 3, 10], 30)).toEqual([
    [2],
    [5],
    [2, 5],
    [3],
    [5, 3],
    [10],
  ]);
});

test("test 2", () => {
  expect(func([8, 2, 6, 5], 50)).toEqual([
    [8],
    [2],
    [8, 2],
    [6],
    [2, 6],
    [5],
    [6, 5],
  ]);
});
