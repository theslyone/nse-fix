var invert = require('invert-obj');

function CustDirectedOrder (custDirectedOrder) {
  this.message = custDirectedOrder;
}

CustDirectedOrder.prototype.value = function () {
  return this.message;
};

CustDirectedOrder.Tag = '1029';

CustDirectedOrder.Type = 'BOOLEAN';

module.exports = CustDirectedOrder;