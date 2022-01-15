import func from "./index.js";

test("test 1", () => {
  expect(
    func([
      [1, 4],
      [2, 5],
      [7, 9],
    ])
  ).toBe(false);
});

test("test 2", () => {
  expect(
    func([
      [6, 7],
      [2, 4],
      [8, 12],
    ])
  ).toBe(true);
});

test("test 3", () => {
  expect(
    func([
      [4, 5],
      [2, 3],
      [3, 6],
    ])
  ).toBe(false);
});
