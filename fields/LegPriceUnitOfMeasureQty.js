var invert = require('invert-obj');

function LegPriceUnitOfMeasureQty (legPriceUnitOfMeasureQty) {
  this.message = legPriceUnitOfMeasureQty;
}

LegPriceUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

LegPriceUnitOfMeasureQty.Tag = '1422';

LegPriceUnitOfMeasureQty.Type = 'QTY';

module.exports = LegPriceUnitOfMeasureQty;