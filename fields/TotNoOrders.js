var invert = require('invert-obj');

function TotNoOrders (totNoOrders) {
  this.message = totNoOrders;
}

TotNoOrders.prototype.value = function () {
  return this.message;
};

TotNoOrders.Tag = '68';

TotNoOrders.Type = 'INT';

module.exports = TotNoOrders;