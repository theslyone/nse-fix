var invert = require('invert-obj');

function MinBidSize (minBidSize) {
  this.message = minBidSize;
}

MinBidSize.prototype.value = function () {
  return this.message;
};

MinBidSize.Tag = '647';

MinBidSize.Type = 'QTY';

module.exports = MinBidSize;