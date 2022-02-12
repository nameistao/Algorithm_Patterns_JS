import func from "./index.js";

test("test 1", () => {
  expect(
    func(
      [
        [2, 6, 8],
        [3, 7, 10],
        [5, 8, 11],
      ],
      5
    )
  ).toBe(7);
});
