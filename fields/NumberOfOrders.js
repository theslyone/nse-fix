var invert = require('invert-obj');

function NumberOfOrders (numberOfOrders) {
  this.message = numberOfOrders;
}

NumberOfOrders.prototype.value = function () {
  return this.message;
};

NumberOfOrders.Tag = '346';

NumberOfOrders.Type = 'INT';

module.exports = NumberOfOrders;