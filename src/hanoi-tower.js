const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // diskNumber is a number of disks
  // turnsSpeed is the speed of moving discs (in turns per hour)

  // For a tower of n disks, there will be required 2^n - 1 transfers
  // of individual disks to shift the tower completely to another rod:
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(3600 * turns / turnsSpeed);

  // Function returns an object with 2 properties:
  return {
    turns: turns, // minimum number of turns to solve the puzzle
    seconds: seconds // minimum number of seconds to solve the puzzle at a given turnsSpeed
  }
}

module.exports = {
  calculateHanoi
};
