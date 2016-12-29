var invert = require('invert-obj');

function LegBidForwardPoints (legBidForwardPoints) {
  this.message = legBidForwardPoints;
}

LegBidForwardPoints.prototype.value = function () {
  return this.message;
};

LegBidForwardPoints.Tag = '1067';

LegBidForwardPoints.Type = 'PRICEOFFSET';

module.exports = LegBidForwardPoints;