var invert = require('invert-obj');

function ContraryInstructionIndicator (contraryInstructionIndicator) {
  this.message = contraryInstructionIndicator;
}

ContraryInstructionIndicator.prototype.value = function () {
  return this.message;
};

ContraryInstructionIndicator.Tag = '719';

ContraryInstructionIndicator.Type = 'BOOLEAN';

module.exports = ContraryInstructionIndicator;