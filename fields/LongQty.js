var invert = require('invert-obj');

function LongQty (longQty) {
  this.message = longQty;
}

LongQty.prototype.value = function () {
  return this.message;
};

LongQty.Tag = '704';

LongQty.Type = 'QTY';

module.exports = LongQty;