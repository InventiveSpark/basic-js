const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, // str is a string to repeat (indispensable parameter)
  { // an object of options that contains properties:
    repeatTimes = 1, // the number of repetitions of the str
    separator = "+", // a string separating repetitions of the str
    addition = "", // an additional string that will be added to each repetition of the str
    additionRepeatTimes = 1, // the number of repetitions of the addition
    additionSeparator = "|", // a string separating repetitions of the addition
  } = {}) {

  // The str and addition parameters are strings by default. 
  // If the type of these parameters is different, they must be converted to a string:
  if (typeof str !== "string") str = String(str);
  if (typeof addition !== "string") addition = String(addition);

  // Return a repeating string:
  return Array(repeatTimes).
    fill(
      str + // a string to repeat repeatTimes times
      Array(additionRepeatTimes).
        fill(addition). // an additional string to repeat additionRepeatTimes times
        join(additionSeparator) // a string separating repetitions of the addition
    )
    .join(separator); // a string separating repetitions of the str
}

module.exports = {
  repeater
};
