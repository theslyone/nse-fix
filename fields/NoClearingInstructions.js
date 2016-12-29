var invert = require('invert-obj');

function NoClearingInstructions (noClearingInstructions) {
  this.message = noClearingInstructions;
}

NoClearingInstructions.prototype.value = function () {
  return this.message;
};

NoClearingInstructions.Tag = '576';

NoClearingInstructions.Type = 'NUMINGROUP';

module.exports = NoClearingInstructions;