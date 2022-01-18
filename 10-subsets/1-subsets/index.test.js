import func from "./index.js";

test("test 1", () => {
  expect(func([1, 3])).toEqual([[], [1], [3], [1, 3]]);
});

test("test 1", () => {
  expect(func([1, 5, 3])).toEqual([
    [],
    [1],
    [5],
    [1, 5],
    [3],
    [1, 3],
    [5, 3],
    [1, 5, 3],
  ]);
});
