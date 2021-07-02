// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array other than input[i]

function arrayOfProducts(array) {
  // Array that will take in the products of every other number in the original array
  let product = []
  for (let i = 0; i < array.length; i++) {
    let val = i
    for (let j = 0; j < array.length; j++) {
      // if i doesn't equal j, multiply i  by j
      if (i !== j) {
        val *= array[j]
      }
      // product[i] equals the value assigned to val (the multiplied value)
      product[i] = val
    }
  }
  // Return the new array with the product values
  return product
}
