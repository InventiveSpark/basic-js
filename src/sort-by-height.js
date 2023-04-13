const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  // Creating an array of sorted elements:
  const arrSortedValues = arr.filter(item => item !== -1).sort((a, b) => a - b);
  // Creating an array of indexes of elements that are equal to -1:
  const busyIndexes = []; // empty array
  arr.forEach((item, index) => {
    if (item === -1) busyIndexes.push(index)
  });
  // Adding elements equal to -1 to the appropriate places:
  busyIndexes.forEach(busyIndex => {
    arrSortedValues.splice(busyIndex, 0, -1);
  });
  return arrSortedValues;
}

module.exports = {
  sortByHeight
};
