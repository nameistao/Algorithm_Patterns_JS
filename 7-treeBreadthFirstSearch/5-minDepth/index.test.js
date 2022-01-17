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
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  expect(func(root)).toBe(2);
});

test("test 2", () => {
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.left.left = new TreeNode(9);
  root.right.left.left = new TreeNode(11);
  expect(func(root)).toBe(3);
});
