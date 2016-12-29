var invert = require('invert-obj');

function DerivativeUnitOfMeasure (derivativeUnitOfMeasure) {
  this.message = derivativeUnitOfMeasure;
}

DerivativeUnitOfMeasure.prototype.value = function () {
  return this.message;
};

DerivativeUnitOfMeasure.Tag = '1269';

DerivativeUnitOfMeasure.Type = 'STRING';

module.exports = DerivativeUnitOfMeasure;