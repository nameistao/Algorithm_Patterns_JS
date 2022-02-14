import func from "./index.js";

test("test 1", () => {
  expect(
    func(5, [
      [4, 2],
      [4, 3],
      [2, 0],
      [2, 1],
      [3, 1],
    ])
  ).toEqual([4, 2, 3, 0, 1]);
});

test("test 2", () => {
  expect(
    func(4, [
      [3, 2],
      [3, 0],
      [2, 0],
      [2, 1],
    ])
  ).toEqual([3, 2, 0, 1]);
});

test("test 3", () => {
  expect(
    func(7, [
      [6, 4],
      [6, 2],
      [5, 3],
      [5, 4],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 1],
    ])
  ).toEqual([6, 5, 3, 4, 0, 2, 1]);
});
