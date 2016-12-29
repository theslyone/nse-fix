var invert = require('invert-obj');

function UnderlyingCurrency (underlyingCurrency) {
  this.message = underlyingCurrency;
}

UnderlyingCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingCurrency.Tag = '318';

UnderlyingCurrency.Type = 'CURRENCY';

module.exports = UnderlyingCurrency;