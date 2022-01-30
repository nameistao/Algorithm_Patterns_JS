import func from "./index.js";

test("test 1", () => {
  expect(func("aappp")).toBe("papap");
});

test("test 2", () => {
  expect(func("Programming")).toBe("rgrmgmoaPin");
});

test("test 3", () => {
  expect(func("aapa")).toBe("");
});
