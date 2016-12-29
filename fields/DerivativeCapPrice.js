var invert = require('invert-obj');

function DerivativeCapPrice (derivativeCapPrice) {
  this.message = derivativeCapPrice;
}

DerivativeCapPrice.prototype.value = function () {
  return this.message;
};

DerivativeCapPrice.Tag = '1321';

DerivativeCapPrice.Type = 'PRICE';

module.exports = DerivativeCapPrice;