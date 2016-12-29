var invert = require('invert-obj');

function NoNotAffectedOrders (noNotAffectedOrders) {
  this.message = noNotAffectedOrders;
}

NoNotAffectedOrders.prototype.value = function () {
  return this.message;
};

NoNotAffectedOrders.Tag = '1370';

NoNotAffectedOrders.Type = 'NUMINGROUP';

module.exports = NoNotAffectedOrders;