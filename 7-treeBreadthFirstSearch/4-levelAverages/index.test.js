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
  root.left.right = new TreeNode(2);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  expect(func(root)).toEqual([12, 4, 6.5]);
});

test("test 2", () => {
  const root = new TreeNode(999);
  root.left = new TreeNode(12);
  root.right = new TreeNode(-12);
  root.left.left = new TreeNode(10);
  root.left.right = new TreeNode(10);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(10);
  expect(func(root)).toEqual([999, 0, 10]);
});
