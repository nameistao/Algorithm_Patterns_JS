import func from "./index.js";

test("test 1", () => {
  expect(String(func([-3, 0, 1, 2, -1, 1, -2]))).toBe(
    String([
      [-3, 1, 2],
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, 0, 1],
    ])
  );
});

test("test 2", () => {
  expect(String(func([-5, 2, -1, -2, 3]))).toBe(
    String([
      [-5, 2, 3],
      [-2, -1, 3],
    ])
  );
});
