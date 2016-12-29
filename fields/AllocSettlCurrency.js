var invert = require('invert-obj');

function AllocSettlCurrency (allocSettlCurrency) {
  this.message = allocSettlCurrency;
}

AllocSettlCurrency.prototype.value = function () {
  return this.message;
};

AllocSettlCurrency.Tag = '736';

AllocSettlCurrency.Type = 'CURRENCY';

module.exports = AllocSettlCurrency;