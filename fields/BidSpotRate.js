var invert = require('invert-obj');

function BidSpotRate (bidSpotRate) {
  this.message = bidSpotRate;
}

BidSpotRate.prototype.value = function () {
  return this.message;
};

BidSpotRate.Tag = '188';

BidSpotRate.Type = 'PRICE';

module.exports = BidSpotRate;