import { expect } from "@jest/globals";
import func from "./index.js";

test("test 1", () => {
  expect(func([2, 1, 5, 1, 3, 2], 3)).toBe(9);
});

test("test 2", () => {
  expect(func([2, 3, 4, 1, 5], 2)).toBe(7);
});
