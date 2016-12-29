var invert = require('invert-obj');

function OrderAvgPx (orderAvgPx) {
  this.message = orderAvgPx;
}

OrderAvgPx.prototype.value = function () {
  return this.message;
};

OrderAvgPx.Tag = '799';

OrderAvgPx.Type = 'PRICE';

module.exports = OrderAvgPx;