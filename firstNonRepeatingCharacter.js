// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character. The first non-repeating character is the first character in a string that occurs only once. If the input string doesn't have any non-repeating characters, your function should return -1.

function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let duplicate = false
    for (let j = 0; j < string.length; j++) {
      // If the indices of i and j are the same, but i and j on their own are not the same, they would be duplicates (i.e. - string[i] = 10 and string[j] = 10 but i = 5 and j = 8, that is a duplicate)
      if(string[i] === string[j] && i !== j) duplicate = true
    }
    // If duplicate is true, return i
    if(!duplicate) return i
  }
  // If there are no repeating characters, return -1
  return -1
}
