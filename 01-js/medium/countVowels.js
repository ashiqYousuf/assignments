/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowelsCount = 0;
  for (let index = 0; index < str.length; index++) {
    const c = str[index];
    if (
      c == "a" ||
      c == "A" ||
      c == "E" ||
      c == "e" ||
      c == "I" ||
      c == "i" ||
      c == "O" ||
      c == "o" ||
      c == "U" ||
      c == "u"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = countVowels;
