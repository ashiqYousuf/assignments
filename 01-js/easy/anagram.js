/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let hash = {}

  if (str1.length != str2.length) {
    return false
  }

  str1 = str1.toUpperCase()
  str2 = str2.toUpperCase()

  for (let index=0; index<str1.length; index++) {
    if (str1[index] in hash) {
      hash[str1[index]]++
    } else {
      hash[str1[index]] = 1
    }
  }

  for (let index=0; index<str2.length; index++) {
    if (!(str2[index] in hash)) {
      return false
    }

    hash[str2[index]]--
  }

  let count = 0

  for (let key in hash) {
    count += hash[key]
  }

  return count === 0
}

module.exports = isAnagram;
