// Write a function that takes in a Binary Search Tree and a target integer value and returns the closest value to that target value contained in the BST

// BST class

class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Main Function

function findClosestValue(tree, target) {
  return closestVal(tree, target, tree.value)
}

// Helper Function

function closestValue(tree, target, closest) {
  // If there is no tree, return closest from the passed in values
  if (tree === null) return closest
  // If the absolute value of the target value minus the closest value is greater than the absolute value of the target minus the value of the specific tree value(tree.value), reassign closest to tree.value
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value
  }
  // If the target is less than tree.value, traverse through the left side of the BST
  if (target < tree.value) {
    return closestValue(tree.left, target, closest)
  } // If the target is greater than tree.value, traverse through the right side of the BST
  else if (target > tree.value) {
    return closestValue(tree.right, target, closest)
  } // If neither condition is met, return closest
  else {
    return closest
  }
}
