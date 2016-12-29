var invert = require('invert-obj');

function UnderlyingStrikeCurrency (underlyingStrikeCurrency) {
  this.message = underlyingStrikeCurrency;
}

UnderlyingStrikeCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingStrikeCurrency.Tag = '941';

UnderlyingStrikeCurrency.Type = 'CURRENCY';

module.exports = UnderlyingStrikeCurrency;