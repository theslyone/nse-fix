var invert = require('invert-obj');

function UnderlyingAllocationPercent (underlyingAllocationPercent) {
  this.message = underlyingAllocationPercent;
}

UnderlyingAllocationPercent.prototype.value = function () {
  return this.message;
};

UnderlyingAllocationPercent.Tag = '972';

UnderlyingAllocationPercent.Type = 'PERCENTAGE';

module.exports = UnderlyingAllocationPercent;