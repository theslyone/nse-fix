var invert = require('invert-obj');

function NoAffectedOrders (noAffectedOrders) {
  this.message = noAffectedOrders;
}

NoAffectedOrders.prototype.value = function () {
  return this.message;
};

NoAffectedOrders.Tag = '534';

NoAffectedOrders.Type = 'NUMINGROUP';

module.exports = NoAffectedOrders;