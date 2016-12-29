var invert = require('invert-obj');

function OrigTradeHandlingInstr (origTradeHandlingInstr) {
  this.message = origTradeHandlingInstr;
}

OrigTradeHandlingInstr.prototype.value = function () {
  return this.message;
};

OrigTradeHandlingInstr.Tag = '1124';

OrigTradeHandlingInstr.Type = 'CHAR';

module.exports = OrigTradeHandlingInstr;