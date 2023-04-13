const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; //  decay rate of carbon is 15 dpm/g 
const HALF_LIFE_PERIOD = 5730; // The half-life for radioactive decay of 14C isotope is 5730 years

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if ((typeof sampleActivity === 'string') && // wrong type & no argument check
    (0 < sampleActivity) && (sampleActivity < MODERN_ACTIVITY)) // validate parameter
    return Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / sampleActivity));
  return false;
  // https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#mjx-eqn-21.4.2
}

module.exports = {
  dateSample
};
