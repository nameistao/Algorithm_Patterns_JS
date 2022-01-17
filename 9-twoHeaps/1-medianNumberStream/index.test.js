import ContMedian from "./index.js";

test("test 1", () => {
  const contMedian = new ContMedian();
  contMedian.insert(5);
  contMedian.insert(10);
  expect(contMedian.getMedian()).toBe(7.5);
});

test("test 2", () => {
  const contMedian = new ContMedian();
  contMedian.insert(1);
  expect(contMedian.getMedian()).toBe(1);
});

test("test 3", () => {
  const contMedian = new ContMedian();
  contMedian.insert(5);
  contMedian.insert(10);
  contMedian.insert(100);
  contMedian.insert(200);
  contMedian.insert(6);
  contMedian.insert(13);
  contMedian.insert(14);
  expect(contMedian.getMedian()).toBe(13);
});
