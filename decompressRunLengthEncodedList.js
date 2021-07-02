// Given a list (nums) of integers representing a list compressed with run-length encoding. Consider each adjacent pair of elements [freq, val] = [nums[2 * i], nums[2 * i + 1] (with i >= 0). For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list. Return the decompressed list

function decompressRunLengthList(nums) {
  // New array the values will be pushed into
  let results = []
  // Iterate through the nums array
  for (let i = 0; i < nums.length; i++) {
    // If i is even, create a variable that assigns it as the value that will determine how many times the following value will be pushed into the new array. Afterwards, create a variable for that number (assigning it as i + 1 since in this case, that will always be true)
    if (i % 2 === 0) {
      let freq = nums[i]
      let num = nums[i + 1]
      // Iterate by the size of each individual freq, and push the value into the new array each time the conditions are met
      for (let j = 0; j < freq; j++) {
        results.push(num)
      }
    }
  }
  // Return the new array
  return results
}
