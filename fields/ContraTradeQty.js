var invert = require('invert-obj');

function ContraTradeQty (contraTradeQty) {
  this.message = contraTradeQty;
}

ContraTradeQty.prototype.value = function () {
  return this.message;
};

ContraTradeQty.Tag = '437';

ContraTradeQty.Type = 'QTY';

module.exports = ContraTradeQty;