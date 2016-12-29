var invert = require('invert-obj');

function TotalAffectedOrders (totalAffectedOrders) {
  this.message = totalAffectedOrders;
}

TotalAffectedOrders.prototype.value = function () {
  return this.message;
};

TotalAffectedOrders.Tag = '533';

TotalAffectedOrders.Type = 'INT';

module.exports = TotalAffectedOrders;