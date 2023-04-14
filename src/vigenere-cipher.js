const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    // Two types: direct and reverse. The type is determined at the moment of creation.
    // The direct type (used by default) simply encodes and decodes the string that was 
    // transmitted to it, and the reverse type returns an inverted string after encoding 
    // and decoding.
    this.type = type;
  }
  encrypt(message, key) {
    return this.#codec(message, key);
  }
  decrypt(encryptedMessage, key) {
    return this.#codec(encryptedMessage, key, true);
  }
  // CODEC = Coder/Decoder (Encryptor/Decryptor):
  #codec(message, key, decode = false) { // private method
    // The third parameter sets the type of operation:
    // * false = 0 - encode (encrypt) by default
    // * true = 1 - decode (decrypt)

    if (!message || !key) // if at least one of the mandatory parameters is not provided:
      throw new Error("Incorrect arguments!");

    // Offset of the first Latin character in uppercase:
    const firstLetterCode = "A".charCodeAt(); // code 65
    // The size of the Latin alphabet:
    const alphabetSize = "Z".charCodeAt() - firstLetterCode + 1; // 26: from A (65) to Z (90)

    // Helper functions:
    // "aBcXYz" => [ 0, 1, 2, 23, 24, 25 ],     " !#$%^" => [ -33, -32, -30, -29, -28, 29 ]
    const strToNums = (chars) => chars.toUpperCase().split("").map(char => char.charCodeAt() - firstLetterCode);
    // The text returned by the codec must be uppercase
    // [ 0, 1, 2, 23, 24, 25 ] => "ABCXYZ",     [ -33, -32, -30, -29, -28, 29 ] => " !#$%^"
    const numsToStr = (nums) => nums.map(num => String.fromCharCode(num + firstLetterCode)).join("");

    // Transformation of message and key strings into arrays of numbers:
    key = strToNums(key); // coding and decoding key
    message = strToNums(message); // string to encode or decode

    let keyIndx = 0; // index in the key array
    message.forEach((messageNum, msgIndx) => {
      if (0 <= messageNum && messageNum < alphabetSize) // codec encrypts and decrypts only the Latin
        // alphabet (all other symbols remain unchanged)
        message[msgIndx] = ((decode ? -1 : 1) * key[keyIndx++ % key.length] + decode * alphabetSize + messageNum) % alphabetSize;
      // When the message is longer than the key, the key is repeated as many times as needed 
      // (keyIndx++ % key.length)
    });
    // Convertion an array of numbers back to a string with a message:
    message = numsToStr(message);
    // Depending on the type, a string with an encrypted or decrypted message is returned
    // in a direct or inverted order:
    return this.type ? message : message.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
