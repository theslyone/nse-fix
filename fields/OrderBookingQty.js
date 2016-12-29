var invert = require('invert-obj');

function OrderBookingQty (orderBookingQty) {
  this.message = orderBookingQty;
}

OrderBookingQty.prototype.value = function () {
  return this.message;
};

OrderBookingQty.Tag = '800';

OrderBookingQty.Type = 'QTY';

module.exports = OrderBookingQty;