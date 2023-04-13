const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  let month;
  try {
    month = date.getUTCMonth() + 1; // getMonth() method fails in very tricky moments
  } catch {
    throw new Error("Invalid date!");
  };

  return ["winter", "spring", "summer", "autumn", "winter"][Math.floor(month / 3)];
}

module.exports = {
  getSeason
};
