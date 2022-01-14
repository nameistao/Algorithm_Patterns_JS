import func from "./index.js";

test("test 1", () => {
  expect(
    func(
      [
        [1, 3],
        [5, 7],
        [8, 12],
      ],
      [4, 6]
    )
  ).toEqual([
    [1, 3],
    [4, 7],
    [8, 12],
  ]);
});

test("test 2", () => {
  expect(
    func(
      [
        [1, 3],
        [5, 7],
        [8, 12],
      ],
      [4, 10]
    )
  ).toEqual([
    [1, 3],
    [4, 12],
  ]);
});

test("test 3", () => {
  expect(
    func(
      [
        [2, 3],
        [5, 7],
      ],
      [1, 4]
    )
  ).toEqual([
    [1, 4],
    [5, 7],
  ]);
});
