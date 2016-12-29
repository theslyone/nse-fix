var invert = require('invert-obj');

function SettlCurrency (settlCurrency) {
  this.message = settlCurrency;
}

SettlCurrency.prototype.value = function () {
  return this.message;
};

SettlCurrency.Tag = '120';

SettlCurrency.Type = 'CURRENCY';

module.exports = SettlCurrency;