import { expect } from "@jest/globals";
import func from "./index.js";

test("test 1", () => {
  expect(func([2, 1, 5, 1, 3, 2], 3)).toBe(9);
});

test("test 2", () => {
  expect(func([2, 3, 4, 1, 5], 2)).toBe(7);
});

test("test 3", () => {
  expect(func([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1], 5)).toBe(29);
});
