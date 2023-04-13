const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Boundary case for stopping recursion:
    if (!Array.isArray(arr)) return 0; // if the passed value is not an Array

    let depth = 0;
    arr.forEach(element => {
      depth = Math.max(this.calculateDepth(element), depth); // recursive call
    });
    return ++depth;
  }
}

module.exports = {
  DepthCalculator
};
