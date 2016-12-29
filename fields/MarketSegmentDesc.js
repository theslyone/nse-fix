var invert = require('invert-obj');

function MarketSegmentDesc (marketSegmentDesc) {
  this.message = marketSegmentDesc;
}

MarketSegmentDesc.prototype.value = function () {
  return this.message;
};

MarketSegmentDesc.Tag = '1396';

MarketSegmentDesc.Type = 'STRING';

module.exports = MarketSegmentDesc;