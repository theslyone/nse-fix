var invert = require('invert-obj');

function BidID (bidId) {
  this.message = bidId;
}

BidID.prototype.value = function () {
  return this.message;
};

BidID.Tag = '390';

BidID.Type = 'STRING';

module.exports = BidID;