var invert = require('invert-obj');

function UnderlyingPriceUnitOfMeasureQty (underlyingPriceUnitOfMeasureQty) {
  this.message = underlyingPriceUnitOfMeasureQty;
}

UnderlyingPriceUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

UnderlyingPriceUnitOfMeasureQty.Tag = '1425';

UnderlyingPriceUnitOfMeasureQty.Type = 'QTY';

module.exports = UnderlyingPriceUnitOfMeasureQty;