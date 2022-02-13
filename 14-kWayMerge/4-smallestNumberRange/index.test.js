import func from "./index.js";

test("test 1", () => {
  expect(
    func([
      [1, 5, 8],
      [4, 12],
      [7, 8, 10],
    ])
  ).toEqual([4, 7]);
});

test("test 2", () => {
  expect(
    func([
      [1, 9],
      [4, 12],
      [7, 10, 16],
    ])
  ).toEqual([9, 12]);
});
