var invert = require('invert-obj');

function BidPx (bidPx) {
  this.message = bidPx;
}

BidPx.prototype.value = function () {
  return this.message;
};

BidPx.Tag = '132';

BidPx.Type = 'PRICE';

module.exports = BidPx;