const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const variants = []; // empty array
  const digits = String(n).split(""); // ["1", "5", "2"]
  for (let i = 0; i < digits.length; i++) {
    variants.push(
      Number(digits.filter((item, index) => (index !== i)).join(""))
    );
  }
  // variants = [52, 12, 15]
  return Math.max(...variants); // 52
}

module.exports = {
  deleteDigit
};
