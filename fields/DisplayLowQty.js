var invert = require('invert-obj');

function DisplayLowQty (displayLowQty) {
  this.message = displayLowQty;
}

DisplayLowQty.prototype.value = function () {
  return this.message;
};

DisplayLowQty.Tag = '1085';

DisplayLowQty.Type = 'QTY';

module.exports = DisplayLowQty;