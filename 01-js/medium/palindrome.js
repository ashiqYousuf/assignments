/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlpha(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

function isPalindrome(str) {
  let startIndex = 0;
  let endIndex = str.length - 1;

  while (startIndex < endIndex) {
    const charStart = str[startIndex].toLowerCase();
    const charEnd = str[endIndex].toLowerCase();

    if (!isAlpha(charStart)) {
      startIndex++;
      continue;
    }

    if (!isAlpha(charEnd)) {
      endIndex--;
      continue;
    }

    if (charStart != charEnd) {
      return false;
    }

    startIndex++;
    endIndex--;
  }
  return true;
}

module.exports = isPalindrome;
