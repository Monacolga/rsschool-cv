const { CONSTANTS } = require('./constants.js');

const { SPECIAL_PROP_VALUE } = CONSTANTS;

class NotImplementedError extends Error {
<<<<<<< HEAD
    constructor(message) {
        super(message);
        this._specialProp = SPECIAL_PROP_VALUE;
    }
};

module.exports = {
    NotImplementedError
=======
  constructor(message) {
    super(message);
    this._specialProp = SPECIAL_PROP_VALUE;
  }
};

module.exports = {
  NotImplementedError
>>>>>>> 81bfff3a1586fe0b3fab22a7a977b2baf09338a6
};