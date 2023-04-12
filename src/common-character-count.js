const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  getMap = (string) => {
    const charCount = new Map(); // empty map
    for (let i = 0; i < string.length; i++) {
      let counter = charCount.get(string[i]);
      charCount.set(string[i], (!counter ? 1 : ++counter));
    }
    // Return map with key-value pairs [char: count]
    return charCount;
  }

  // Calculate a map for each string:
  const charsCount1 = getMap(s1); // {{"a" => 2}, {"b" => 1}, {"c" => 2}} for "aabcc"
  const charsCount2 = getMap(s2); // {{"a" => 3}, {"d" => 1}, {"c" => 1}} for "adcaa"

  let result = 0;
  for (let entry of charsCount1) { // entry = ['a', 2], ['b', 1], etc...
    const char = entry[0];
    let charCount2 = charsCount2.get(char); // number of occurrences of char in string s2
    charCount2 = !charCount2 ? 0 : charCount2;
    result += Math.min(entry[1], charCount2); // entry[1] is the number of occurrences of char in string s1
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};