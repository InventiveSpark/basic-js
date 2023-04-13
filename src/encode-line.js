const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 2) {
    return str;
  }
  let result = "";
  character = str[0];
  counter = 1;
  for (let i = 1; i <= str.length; i++) { // the i-th character will have the value undefined
    if (str[i] !== character) {
      result += ((counter < 2) ? "" : counter) + character;
      character = str[i];
      counter = 1;
    }
    else counter++;
  }
  return result;
}

module.exports = {
  encodeLine
};
