var invert = require('invert-obj');

function OrderQty (orderQty) {
  this.message = orderQty;
}

OrderQty.prototype.value = function () {
  return this.message;
};

OrderQty.Tag = '38';

OrderQty.Type = 'QTY';

module.exports = OrderQty;