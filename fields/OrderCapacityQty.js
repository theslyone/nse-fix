var invert = require('invert-obj');

function OrderCapacityQty (orderCapacityQty) {
  this.message = orderCapacityQty;
}

OrderCapacityQty.prototype.value = function () {
  return this.message;
};

OrderCapacityQty.Tag = '863';

OrderCapacityQty.Type = 'QTY';

module.exports = OrderCapacityQty;