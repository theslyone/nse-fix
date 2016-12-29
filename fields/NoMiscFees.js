var invert = require('invert-obj');

function NoMiscFees (noMiscFees) {
  this.message = noMiscFees;
}

NoMiscFees.prototype.value = function () {
  return this.message;
};

NoMiscFees.Tag = '136';

NoMiscFees.Type = 'NUMINGROUP';

module.exports = NoMiscFees;