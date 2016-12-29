var invert = require('invert-obj');

function LegAllocSettlCurrency (legAllocSettlCurrency) {
  this.message = legAllocSettlCurrency;
}

LegAllocSettlCurrency.prototype.value = function () {
  return this.message;
};

LegAllocSettlCurrency.Tag = '1367';

LegAllocSettlCurrency.Type = 'CURRENCY';

module.exports = LegAllocSettlCurrency;