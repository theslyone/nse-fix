var invert = require('invert-obj');

function SideSettlCurrency (sideSettlCurrency) {
  this.message = sideSettlCurrency;
}

SideSettlCurrency.prototype.value = function () {
  return this.message;
};

SideSettlCurrency.Tag = '1155';

SideSettlCurrency.Type = 'CURRENCY';

module.exports = SideSettlCurrency;