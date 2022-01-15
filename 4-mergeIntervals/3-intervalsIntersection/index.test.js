import func from "./index.js";

test("test 1", () => {
  expect(
    func(
      [
        [1, 3],
        [5, 6],
        [7, 9],
      ],
      [
        [2, 3],
        [5, 7],
      ]
    )
  ).toEqual([
    [2, 3],
    [5, 6],
    [7, 7],
  ]);
});

test("test 2", () => {
  expect(
    func(
      [
        [1, 3],
        [5, 7],
        [9, 12],
      ],
      [[5, 10]]
    )
  ).toEqual([
    [5, 7],
    [9, 10],
  ]);
});
