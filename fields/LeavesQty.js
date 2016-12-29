var invert = require('invert-obj');

function LeavesQty (leavesQty) {
  this.message = leavesQty;
}

LeavesQty.prototype.value = function () {
  return this.message;
};

LeavesQty.Tag = '151';

LeavesQty.Type = 'QTY';

module.exports = LeavesQty;