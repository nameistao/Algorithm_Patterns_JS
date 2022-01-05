import func from "./index.js";

test("test 1", () => {
  expect(func([1, 2, 3, 4, 6], 6)).toEqual([1, 3]);
});
