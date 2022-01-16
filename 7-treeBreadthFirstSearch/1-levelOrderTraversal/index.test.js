import func from "./index.js";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

test("test 1", () => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  expect(func(root)).toEqual([12, 7, 1, 9, 10, 5]);
});

test("test 2", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(6);
  expect(func(root)).toEqual([1, 2, 3, 4, 5, 6]);
});
