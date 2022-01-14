import func from "./index.js";

test("test 1", () => {
  expect(
    func([
      [1, 4],
      [2, 5],
      [7, 9],
    ])
  ).toEqual([
    [1, 5],
    [7, 9],
  ]);
});

test("test 2", () => {
  expect(
    func([
      [6, 7],
      [2, 4],
      [5, 9],
    ])
  ).toEqual([
    [2, 4],
    [5, 9],
  ]);
});

test("test 3", () => {
  expect(
    func([
      [1, 4],
      [2, 6],
      [3, 5],
    ])
  ).toEqual([[1, 6]]);
});
