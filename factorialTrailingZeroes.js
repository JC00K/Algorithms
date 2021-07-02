// Given an integer n, return the number of trailing zeroes in n!

function trailingZeroes(n) {
  let count = 0
  // Number that the value will be divided by
  let divisor = 5
  // While the divisor is not greater than the value
  while (divisor <= n) {
    // Increment the count by the value divided by the divisor
    count += Math.floor(n / divisor)
    // Multiply the divisor by 5
    divisor *= 5
  }
  // Return the total count
  return count
}
