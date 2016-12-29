var invert = require('invert-obj');

function NumBidders (numBidders) {
  this.message = numBidders;
}

NumBidders.prototype.value = function () {
  return this.message;
};

NumBidders.Tag = '417';

NumBidders.Type = 'INT';

module.exports = NumBidders;