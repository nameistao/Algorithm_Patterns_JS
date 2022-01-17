import func from "./index.js";

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

test("test 1", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  expect(func(root, [1, 0, 7])).toBe(false);
});

test("test 1", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(0);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  expect(func(root, [1, 1, 6])).toBe(true);
});
