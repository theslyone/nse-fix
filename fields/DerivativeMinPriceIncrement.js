var invert = require('invert-obj');

function DerivativeMinPriceIncrement (derivativeMinPriceIncrement) {
  this.message = derivativeMinPriceIncrement;
}

DerivativeMinPriceIncrement.prototype.value = function () {
  return this.message;
};

DerivativeMinPriceIncrement.Tag = '1267';

DerivativeMinPriceIncrement.Type = 'FLOAT';

module.exports = DerivativeMinPriceIncrement;