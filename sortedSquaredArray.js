// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the sqaures of the original integers also sorted in ascending order

function sortedSquareArray(array) {
  // Array that squared values will be pushed into
  let squared = []
  // Sort the array before iteration
  array.sort()
  // Loop through the passed in array
  for(let i = 0; i < array.length; i++) {
    let square = array[i] * array[i]
    // Push each squared value into the new array
    squared.push(square)
  }
  // Return the new array sorted
  return squared.sort((a, b) => a - b)
}
