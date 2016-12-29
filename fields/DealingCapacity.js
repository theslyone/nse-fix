var invert = require('invert-obj');

function DealingCapacity (dealingCapacity) {
  this.message = dealingCapacity;
}

DealingCapacity.prototype.value = function () {
  return this.message;
};

DealingCapacity.Tag = '1048';

DealingCapacity.Type = 'PRICEOFFSET';

module.exports = DealingCapacity;