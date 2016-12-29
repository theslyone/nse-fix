var invert = require('invert-obj');

function CurrencyRatio (currencyRatio) {
  this.message = currencyRatio;
}

CurrencyRatio.prototype.value = function () {
  return this.message;
};

CurrencyRatio.Tag = '1382';

CurrencyRatio.Type = 'FLOAT';

module.exports = CurrencyRatio;