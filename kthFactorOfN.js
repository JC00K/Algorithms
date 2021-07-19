// Given two positive integers n and k, a factor of n is defined as an integer i where n % i === 0. Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

function kthFactor(n, k) {
  // Empty array to store valid factors
let factorArr = []
for (let i = 1; i <= n; i++) {
  // If n modulos the current value of i equals 0 (if n can be evenly divided by i with no remainder, push the value of i into the factors array as it is a valid factor)
  if (n % i === 0) {
    factorArr.push(i)
  }
}
// if the length of k is greater than the factors array, return -1 as the list cannot be shorter than the length of k
if (k > factorArr.length) {
  return -1
} else {
  return factorArr[k - 1]
}
}
