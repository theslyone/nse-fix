var invert = require('invert-obj');

function BidSize (bidSize) {
  this.message = bidSize;
}

BidSize.prototype.value = function () {
  return this.message;
};

BidSize.Tag = '134';

BidSize.Type = 'QTY';

module.exports = BidSize;