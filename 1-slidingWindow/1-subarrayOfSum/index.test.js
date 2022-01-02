import { expect } from "@jest/globals";
import func from "./index.js";

test("test 1", () => {
  expect(func([2, 1, 5, 2, 3, 2], 7)).toBe(2);
});

test("test 2", () => {
  expect(func([2, 1, 5, 2, 8], 7)).toBe(1);
});

test("test 3", () => {
  expect(func([3, 4, 1, 1, 6], 8)).toBe(3);
});
