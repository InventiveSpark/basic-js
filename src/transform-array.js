const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  // In a new array, a flag is added to each value of the original array:
  const result = arr.map(element => [element, true]); // value => [value, flag]
  const value = 0;
  const flag = 1;

  // Calculate flags and change the values of array elements based on control sequences:
  for (let i = 0; i < result.length; i++) {
    switch (result[i][value]) {
      case "--discard-next":
        if (i !== result.length - 1)
          result[i + 1][flag] = false;
        result[i][flag] = false;
        break;
      case "--discard-prev":
        if (i !== 0)
          result[i - 1][flag] = false;
        result[i][flag] = false;
        break;
      case "--double-next":
        if (i !== result.length - 1)
          result[i][value] = result[i + 1][value];
        else
          result[i][flag] = false;
        break;
      case "--double-prev":
        if (i !== 0 && result[i - 1][flag])
          result[i][value] = result[i - 1][value];
        else
          result[i][flag] = false;
        break;
    }
  }

  // The resulting array contains only the values marked with the flag:
  return result.filter(element => element[flag]).map(element => element[value]);
}

module.exports = {
  transform
};
