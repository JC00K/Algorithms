// Write a function that takes in an array of integers and returns a sorted version of the array. Use the Insertion Sort algorithm to sort the array

function insertionSort(array) {
  // Starts i at the 2nd value (1st index) of the array
  for (let i = 1; i < array.length; i++) {
    let current = array[i]
    // Assigns j to be the index before i
    let j = i - 1
    // While j is greater than or equal to 0, and the current value is less than j: j + 1 becomes j, and is than decremented before the next iteration occurs
    while((j >= 0) && (current < array[j])) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = current
  }
  return array
}
