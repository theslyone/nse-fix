var invert = require('invert-obj');

function Currency (currency) {
  this.message = currency;
}

Currency.prototype.value = function () {
  return this.message;
};

Currency.Tag = '15';

Currency.Type = 'CURRENCY';

module.exports = Currency;