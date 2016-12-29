var invert = require('invert-obj');

function BidSwapPoints (bidSwapPoints) {
  this.message = bidSwapPoints;
}

BidSwapPoints.prototype.value = function () {
  return this.message;
};

BidSwapPoints.Tag = '1065';

BidSwapPoints.Type = 'PRICEOFFSET';

module.exports = BidSwapPoints;