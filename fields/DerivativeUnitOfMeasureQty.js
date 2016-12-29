var invert = require('invert-obj');

function DerivativeUnitOfMeasureQty (derivativeUnitOfMeasureQty) {
  this.message = derivativeUnitOfMeasureQty;
}

DerivativeUnitOfMeasureQty.prototype.value = function () {
  return this.message;
};

DerivativeUnitOfMeasureQty.Tag = '1270';

DerivativeUnitOfMeasureQty.Type = 'QTY';

module.exports = DerivativeUnitOfMeasureQty;