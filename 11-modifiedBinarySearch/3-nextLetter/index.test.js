import func from "./index.js";

test("test 1", () => {
  expect(func(["a", "c", "f", "h"], "f")).toBe("h");
});

test("test 2", () => {
  expect(func(["a", "c", "f", "h"], "b")).toBe("c");
});

test("test 3", () => {
  expect(func(["a", "c", "f", "h"], "m")).toBe("a");
});

test("test 4", () => {
  expect(func(["a", "c", "f", "h"], "h")).toBe("a");
});
