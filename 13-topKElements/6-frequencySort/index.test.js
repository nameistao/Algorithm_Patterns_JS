import func from "./index.js";

test("test 1", () => {
  expect(func("Programming")).toBe("rrggmmoaPin");
});

test("test 2", () => {
  expect(func("abcbab")).toBe("bbbaac");
});
