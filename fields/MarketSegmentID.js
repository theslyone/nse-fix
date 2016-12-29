var invert = require('invert-obj');

function MarketSegmentID (marketSegmentId) {
  this.message = marketSegmentId;
}

MarketSegmentID.prototype.value = function () {
  return this.message;
};

MarketSegmentID.Tag = '1300';

MarketSegmentID.Type = 'STRING';

module.exports = MarketSegmentID;