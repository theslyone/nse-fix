var invert = require('invert-obj');

function LegCurrency (legCurrency) {
  this.message = legCurrency;
}

LegCurrency.prototype.value = function () {
  return this.message;
};

LegCurrency.Tag = '556';

LegCurrency.Type = 'CURRENCY';

module.exports = LegCurrency;