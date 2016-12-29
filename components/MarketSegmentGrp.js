var NoMarketSegments = require('../fields/NoMarketSegments');
var SecurityTradingRules = require('../components/SecurityTradingRules');
var StrikeRules = require('../components/StrikeRules');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function MarketSegmentGrp (marketSegmentGrp) {
  this.message = marketSegmentGrp;
}

/* group */

/* component */
MarketSegmentGrp.prototype.securityTradingRules = function () {
  return this.message.groups[SecurityTradingRules.Tag]
    .map(function (securityTradingRules) {
      return new SecurityTradingRules(securityTradingRules);
  });
};

/* component */
MarketSegmentGrp.prototype.strikeRules = function () {
  return this.message.groups[StrikeRules.Tag]
    .map(function (strikeRules) {
      return new StrikeRules(strikeRules);
  });
};

/* field */
MarketSegmentGrp.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketID.Tag]);
};

/* field */
MarketSegmentGrp.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketSegmentID.Tag]);
};

/* end group */

MarketSegmentGrp.Tag = '1310';

module.exports = MarketSegmentGrp;