var invert = require('invert-obj');

function CumQty (cumQty) {
  this.message = cumQty;
}

CumQty.prototype.value = function () {
  return this.message;
};

CumQty.Tag = '14';

CumQty.Type = 'QTY';

module.exports = CumQty;