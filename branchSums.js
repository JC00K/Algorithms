// Write a function that takes in a binary tree and returns a list of its branch sums ordered from left most branch sum to right most branch sum.

class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Helper function
function branchSumHelper(root, count, sums) {
  if(!root) return
  const newCount = count + root.value
  if(!root.left && !root.right) {
    sums.push(newCount)
    return
  }
  // Recursive calls to continue traversal
  branchSumHelper(root.left, newCount, sums)
  branchSumHelper(root.right, newCount, sums)
}


function branchSums(root) {
  const sums = []
  branchSumHelper(root, 0, sums)
  return sums
}
