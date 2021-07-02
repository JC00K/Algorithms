// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.

function binarySearch(array, target) {
  // Pointer variables declaring start, middle and end of the array
  let start = 0
  let end = array.length - 1
  let middle = Math.floor((start + end) / 2)
  // Conditional that applies whenever the target doesn't equal the middle value and the starting value is either the same or less than the ending value (otherwise it would be invalid)
  while (array[middle] !== target && start <= end) {
    // If the target is less than the middle of the array, assign the end to become middle - 1 since that second half of the array no longer applies
    if (target < array[middle]) {
      end = middle - 1
    } else {
      // Otherwise, reassign the start to be 1 greater than the middle as the first half of the array no longer applies and can be ignored
      start = middle + 1
    }
    // Always keeps middle as the midway point between the start and end
    middle = Math.floor((start + end) / 2)
  }
  // Once the middle value equals the target, return the middle value
  if (array[middle] === target) {
    return middle
  }
  // If the value does not exist in the array, return -1
  return -1
}
