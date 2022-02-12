import func from "./index.js";

test("test 1", () => {
  expect(
    func(
      [
        [2, 6, 8],
        [3, 6, 7],
        [1, 3, 4],
      ],
      5
    )
  ).toBe(4);
});

test("test 1", () => {
  expect(
    func(
      [
        [5, 8, 9],
        [1, 7],
      ],
      3
    )
  ).toBe(7);
});
