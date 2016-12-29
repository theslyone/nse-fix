var invert = require('invert-obj');

function OrderID (orderId) {
  this.message = orderId;
}

OrderID.prototype.value = function () {
  return this.message;
};

OrderID.Tag = '37';

OrderID.Type = 'STRING';

module.exports = OrderID;