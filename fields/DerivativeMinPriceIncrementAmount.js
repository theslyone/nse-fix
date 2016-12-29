var invert = require('invert-obj');

function DerivativeMinPriceIncrementAmount (derivativeMinPriceIncrementAmount) {
  this.message = derivativeMinPriceIncrementAmount;
}

DerivativeMinPriceIncrementAmount.prototype.value = function () {
  return this.message;
};

DerivativeMinPriceIncrementAmount.Tag = '1268';

DerivativeMinPriceIncrementAmount.Type = 'AMT';

module.exports = DerivativeMinPriceIncrementAmount;