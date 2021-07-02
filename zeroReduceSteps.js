// Find the number of steps it takes to reduce the value provided to 0
let numberOfSteps = function(num) {
  // Count that will increase with each move
  let count = 0
  // While the number is greater than zero
  while (num > 0) {
    // If the number can be modulos by 2 and subtracted by 1 without being lower than zero, do this step. Otherwise divide by 2
    num = num % 2 ? num - 1 : num / 2
    // Increment the counter
    count++
  }
  // Return the count
  return count
}
