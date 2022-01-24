import func from "./index.js";

test("test 1", () => {
  expect(
    func(
      [
        [1, 2],
        [1, 3],
      ],
      1
    )
  ).toEqual([[1, 2]]);
});

test("test 2", () => {
  expect(
    func(
      [
        [1, 3],
        [3, 4],
        [2, -1],
      ],
      2
    )
  ).toEqual([
    [1, 3],
    [2, -1],
  ]);
});
