var invert = require('invert-obj');

function DerivativePriceUnitOfMeasureQty (derivativePriceUnitOfMeasureQty) {
  this.message = derivativePriceUnitOfMeasureQty;
}

DerivativePriceUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

DerivativePriceUnitOfMeasureQty.Tag = '1316';

DerivativePriceUnitOfMeasureQty.Type = 'QTY';

module.exports = DerivativePriceUnitOfMeasureQty;