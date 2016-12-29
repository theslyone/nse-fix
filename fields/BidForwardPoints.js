var invert = require('invert-obj');

function BidForwardPoints (bidForwardPoints) {
  this.message = bidForwardPoints;
}

BidForwardPoints.prototype.value = function () {
  return this.message;
};

BidForwardPoints.Tag = '189';

BidForwardPoints.Type = 'PRICEOFFSET';

module.exports = BidForwardPoints;