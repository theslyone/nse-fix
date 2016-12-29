var invert = require('invert-obj');

function OrderPercent (orderPercent) {
  this.message = orderPercent;
}

OrderPercent.prototype.value = function () {
  return this.message;
};

OrderPercent.Tag = '516';

OrderPercent.Type = 'PERCENTAGE';

module.exports = OrderPercent;