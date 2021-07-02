// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array


// Function that swaps indices if conditions are met
const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]]
}

function bubbleSort(array) {
  // Define a variable to determine if swaps occur
  let noSwaps
  // Use the first iteration to go from end to start (i only needs to be referenced in order for the swap function to work properly)
  for (let i = array.length; i > 0; i--) {
    // The nested loop will iterate from start to end, and will be the pointer referenced using the swap function from earlier
    for (let j = 0; j < array.length; j++) {
      // If j is greater than j + 1, use the swap function to switch their positions/indices. Also set the noSwap variable to false as a swap has occurred
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        noSwaps = false
      }
      // If there are no swaps, break out of the loop
    } if (noSwaps) break
  }
  // Return the bubble sorted array
  return array
}
