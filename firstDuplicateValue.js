// MEDIUM DIFFICULTY

// Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

// If no integer appears more than once, your function should return -1
// You're allowed to mutate the input array

function firstDuplicateValue(array) {
  // Empty array that will take in all values one by one until a duplicate value is reached
  let newArr = []
  // Iteratet through the array
  for(let i = 0; i < array.length; i++) {
    // If the new array does not include the value at the current index, push the value into the new array
    if(!newArr.includes(array[i])) {
      newArr.push(array[i])
      // Otherwise return the value of the i index in the array
    } else return array[i]
  }
  // If there are no duplicates, return -1
  return -1
}
