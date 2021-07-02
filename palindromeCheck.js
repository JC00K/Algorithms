// Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome (written the same forwards as it is backwards i.e. racecar)

function isPalindrome(string) {
  // Define a variable that will take in the reversed version of the passed in string
  let reverse = ''
  // Iterate through the string backwards
  for(let i = string.length - 1; i >= 0; i--) {
    // Add the specified character in the string to the reverse variable after each iteration
    reverse += string[i]
  }
  // Returns a boolean whether or not the reversed string is equal to the passed in string
  return string === reverse
}
