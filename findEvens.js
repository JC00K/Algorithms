// Given an array 'nums' of integers, return how many of them contain an even number of digits.


function findNumbers(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      j++
    }
  }
  return j
}
