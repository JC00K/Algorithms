// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Selection Sort algorithm to solve the array


// Swap Helper Function
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i
    for (let j = i + 1; j < array.length; j++) {
      // If the lowest value of the array is greater than j, j becomes the new lowest
      if (array[lowest] > array[j]) {
          lowest = j
      }
    }
    // If i isn't equal to the lowest, use the swap helper to make the lowest come before i
    if (i !== lowest) {
      swap(array, i, lowest)
    }
  }
  // Return the newly sorted array
  return array
}
