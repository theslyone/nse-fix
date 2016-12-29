var invert = require('invert-obj');

function DerivativePriceUnitOfMeasure (derivativePriceUnitOfMeasure) {
  this.message = derivativePriceUnitOfMeasure;
}

DerivativePriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

DerivativePriceUnitOfMeasure.Tag = '1315';

DerivativePriceUnitOfMeasure.Type = 'STRING';

module.exports = DerivativePriceUnitOfMeasure;