import func from "./index.js";

test("test 1", () => {
  expect(func("ad52")).toEqual(["ad52", "Ad52", "aD52", "AD52"]);
});

test("test 2", () => {
  expect(func("ab7c")).toEqual([
    "ab7c",
    "Ab7c",
    "aB7c",
    "AB7c",
    "ab7C",
    "Ab7C",
    "aB7C",
    "AB7C",
  ]);
});
