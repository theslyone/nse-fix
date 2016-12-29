var invert = require('invert-obj');

function LegOrderQty (legOrderQty) {
  this.message = legOrderQty;
}

LegOrderQty.prototype.value = function () {
  return this.message;
};

LegOrderQty.Tag = '685';

LegOrderQty.Type = 'QTY';

module.exports = LegOrderQty;