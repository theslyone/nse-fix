var invert = require('invert-obj');

function DerivativeStrikePrice (derivativeStrikePrice) {
  this.message = derivativeStrikePrice;
}

DerivativeStrikePrice.prototype.value = function () {
  return this.message;
};

DerivativeStrikePrice.Tag = '1261';

DerivativeStrikePrice.Type = 'PRICE';

module.exports = DerivativeStrikePrice;