const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const columnsNumber = matrix[0].length;
  const rowsNumber = matrix.length;
  const result = Array.from(Array(rowsNumber), () => new Array(columnsNumber)); // an empty two-dimensional array

  // Get the sum of adjacent elements:
  const adjSum = (row, col) => {
    let sum = 0;
    const minColNumber = Math.max((col - 1), 0);
    const maxColNumber = Math.min((col + 2), columnsNumber);
    const minRowNumber = Math.max((row - 1), 0);
    const maxRowNumber = Math.min((row + 2), rowsNumber);
    for (let i = minColNumber; i < maxColNumber; i++) { // cycle through columns
      for (let j = minRowNumber; j < maxRowNumber; j++) { // cycle through rows
        if (!(i === col && j === row)) // exclusion of the element itself
          sum += matrix[j][i] ? 1 : 0;
      }
    }
    return sum;
  }

  for (let i = 0; i < columnsNumber; i++) { // cycle through columns
    for (let j = 0; j < rowsNumber; j++) { // cycle through rows
      result[j][i] = adjSum(j, i);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
