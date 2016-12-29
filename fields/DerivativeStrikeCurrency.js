var invert = require('invert-obj');

function DerivativeStrikeCurrency (derivativeStrikeCurrency) {
  this.message = derivativeStrikeCurrency;
}

DerivativeStrikeCurrency.prototype.value = function () {
  return this.message;
};

DerivativeStrikeCurrency.Tag = '1262';

DerivativeStrikeCurrency.Type = 'CURRENCY';

module.exports = DerivativeStrikeCurrency;