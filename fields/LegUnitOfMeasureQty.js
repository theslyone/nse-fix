var invert = require('invert-obj');

function LegUnitOfMeasureQty (legUnitOfMeasureQty) {
  this.message = legUnitOfMeasureQty;
}

LegUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

LegUnitOfMeasureQty.Tag = '1224';

LegUnitOfMeasureQty.Type = 'QTY';

module.exports = LegUnitOfMeasureQty;