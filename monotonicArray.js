// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic (if its elements, from left to right, are entirely non-increasing or entirely non-decreasing). Empty arrays and arrays of one element are monotonic

function isMonotonic(array) {
  // Variables for both possible outcomes that will be returned if conditions are met
  let increasing = true
  let decreasing = true
  for (let i = 0; i < array.length; i++) {
    // Conditionals for both variables
    if (array[i] < array[i - 1]) decreasing = false
    if (array[i] > array[i - 1]) increasing = false
  }
  // Return which of the 2 variables we created satisfies its conditions
  return increasing || decreasing
}
