// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The number in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
  // Array variable that will be returned with all valid three number sums
  const triplets = []
  // i cannot go to the end of the array because we are looking for groups of 3 integers
  for (let i = 0; i < array.length - 2; i++) {
  // Variables to determine other 2 pointers for integers along with i. Left being the closest to i, and right being the last value in the array
    let left = i + 1
    let right = array.length - 1
    // Conditional that will be met whenever there is a valid array of integers due to the sort prior to looping
    while (left < right) {
      // Variable to add all 3 values together to compare to the targetSum
      const current = array[i] + array[left] + array[right]
      // If the current value matches the targetSum, push all 3 values into the triplets array. Afterwards, increment left by 1 and decrement right by 1
      if (current === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++
        right--
        // If current is less than the targetSum, increment left by 1
      } else if (current < targetSum) {
        left++
        // If current is greater than the targetSum, decrement the right by 1
      } else if (current > targetSum) {
        right--
      }
    }
  }
  // After iterating through the entire array, return the triplets array with all valid three number sums
  return triplets
}
