var invert = require('invert-obj');

function NoOrders (noOrders) {
  this.message = noOrders;
}

NoOrders.prototype.value = function () {
  return this.message;
};

NoOrders.Tag = '73';

NoOrders.Type = 'NUMINGROUP';

module.exports = NoOrders;