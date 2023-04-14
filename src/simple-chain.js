const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: new Array(), // empty array, []

  getLength() { // returns the current chain length as a number
    return this.chain.length;
  },
  addLink(value) { // adds a link containing a string representation of the value to the chain
    this.chain.push(String(value));
    return this; // return reference to self to allow chaining of function calls
  },
  removeLink(position) { // removes a chain link in the specified position
    if (!Number.isInteger(position) || position < 1 || this.chain.length < position) {
      this.chain = new Array(); // delete the existing chain
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this; // return reference to self to allow chaining of function calls
  },
  reverseChain() { // reverses the chain
    this.chain.reverse();
    return this; // return reference to self to allow chaining of function calls
  },
  finishChain() { // ends the chain and returns it
    const chainString = this.chain.map(link => "( " + link + " )").join("~~");
    this.chain = new Array(); // delete the existing chain
    return chainString;
  }
};

module.exports = {
  chainMaker
};