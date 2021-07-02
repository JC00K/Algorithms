// Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order.

// For this problem, a word can contain special characters, punctuation and numbers. The words in the string will be separated by one or more whitespaces, and the reversed string must contain the same whitespaces as the original string.

function reverseWordsInString(string) {
  // Variable that takes the passed in string, reverses it while splitting it into individual arrays per string, before joining them back together in the reversed order
  let reversed = string.split(' ').reverse().join(' ')
  return reversed
}


// Not optimized solution, will refactor to not include "split" and "reverse"
