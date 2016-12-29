var invert = require('invert-obj');

function LegSettlCurrency (legSettlCurrency) {
  this.message = legSettlCurrency;
}

LegSettlCurrency.prototype.value = function () {
  return this.message;
};

LegSettlCurrency.Tag = '675';

LegSettlCurrency.Type = 'CURRENCY';

module.exports = LegSettlCurrency;