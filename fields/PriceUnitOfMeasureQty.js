var invert = require('invert-obj');

function PriceUnitOfMeasureQty (priceUnitOfMeasureQty) {
  this.message = priceUnitOfMeasureQty;
}

PriceUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

PriceUnitOfMeasureQty.Tag = '1192';

PriceUnitOfMeasureQty.Type = 'QTY';

module.exports = PriceUnitOfMeasureQty;