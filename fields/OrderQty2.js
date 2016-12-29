var invert = require('invert-obj');

function OrderQty2 (orderQty2) {
  this.message = orderQty2;
}

OrderQty2.prototype.value = function () {
  return this.message;
};

OrderQty2.Tag = '192';

OrderQty2.Type = 'QTY';

module.exports = OrderQty2;