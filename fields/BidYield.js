var invert = require('invert-obj');

function BidYield (bidYield) {
  this.message = bidYield;
}

BidYield.prototype.value = function () {
  return this.message;
};

BidYield.Tag = '632';

BidYield.Type = 'PERCENTAGE';

module.exports = BidYield;