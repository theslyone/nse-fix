var invert = require('invert-obj');

function BidForwardPoints2 (bidForwardPoints2) {
  this.message = bidForwardPoints2;
}

BidForwardPoints2.prototype.value = function () {
  return this.message;
};

BidForwardPoints2.Tag = '642';

BidForwardPoints2.Type = 'PRICEOFFSET';

module.exports = BidForwardPoints2;