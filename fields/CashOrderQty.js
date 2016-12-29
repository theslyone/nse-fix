var invert = require('invert-obj');

function CashOrderQty (cashOrderQty) {
  this.message = cashOrderQty;
}

CashOrderQty.prototype.value = function () {
  return this.message;
};

CashOrderQty.Tag = '152';

CashOrderQty.Type = 'QTY';

module.exports = CashOrderQty;