import func from "./index.js";

test("test 1", () => {
  expect(func("BAT")).toEqual([
    "BAT",
    "BA1",
    "B1T",
    "B2",
    "1AT",
    "1A1",
    "2T",
    "3",
  ]);
});

test("test 2", () => {
  expect(func("code")).toEqual([
    "code",
    "cod1",
    "co1e",
    "co2",
    "c1de",
    "c1d1",
    "c2e",
    "c3",
    "1ode",
    "1od1",
    "1o1e",
    "1o2",
    "2de",
    "2d1",
    "3e",
    "4",
  ]);
});
