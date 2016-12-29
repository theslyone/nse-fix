var invert = require('invert-obj');

function RoundingModulus (roundingModulus) {
  this.message = roundingModulus;
}

RoundingModulus.prototype.value = function () {
  return this.message;
};

RoundingModulus.Tag = '469';

RoundingModulus.Type = 'FLOAT';

module.exports = RoundingModulus;