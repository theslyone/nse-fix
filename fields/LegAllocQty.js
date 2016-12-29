var invert = require('invert-obj');

function LegAllocQty (legAllocQty) {
  this.message = legAllocQty;
}

LegAllocQty.prototype.value = function () {
  return this.message;
};

LegAllocQty.Tag = '673';

LegAllocQty.Type = 'QTY';

module.exports = LegAllocQty;