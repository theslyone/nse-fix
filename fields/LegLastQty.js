var invert = require('invert-obj');

function LegLastQty (legLastQty) {
  this.message = legLastQty;
}

LegLastQty.prototype.value = function () {
  return this.message;
};

LegLastQty.Tag = '1418';

LegLastQty.Type = 'QTY';

module.exports = LegLastQty;