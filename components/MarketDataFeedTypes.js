var NoMDFeedTypes = require('../fields/NoMDFeedTypes');
var MDFeedType = require('../fields/MDFeedType');
var MarketDepth = require('../fields/MarketDepth');
var MDBookType = require('../fields/MDBookType');

function MarketDataFeedTypes (marketDataFeedTypes) {
  this.message = marketDataFeedTypes;
}

/* group */

/* field */
MarketDataFeedTypes.prototype.mdfeedType = function () {
  return new MDFeedType(this.message.tags[MDFeedType.Tag]);
};

/* field */
MarketDataFeedTypes.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[MarketDepth.Tag]);
};

/* field */
MarketDataFeedTypes.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[MDBookType.Tag]);
};

/* end group */

MarketDataFeedTypes.Tag = '1141';

module.exports = MarketDataFeedTypes;