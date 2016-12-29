var PriceLimitType = require('../fields/PriceLimitType');
var LowLimitPrice = require('../fields/LowLimitPrice');
var HighLimitPrice = require('../fields/HighLimitPrice');
var TradingReferencePrice = require('../fields/TradingReferencePrice');

function PriceLimits (priceLimits) {
  this.message = priceLimits;
}
/* field */
PriceLimits.prototype.priceLimitType = function () {
  return new PriceLimitType(this.message.tags[PriceLimitType.Tag]);
};

/* field */
PriceLimits.prototype.lowLimitPrice = function () {
  return new LowLimitPrice(this.message.tags[LowLimitPrice.Tag]);
};

/* field */
PriceLimits.prototype.highLimitPrice = function () {
  return new HighLimitPrice(this.message.tags[HighLimitPrice.Tag]);
};

/* field */
PriceLimits.prototype.tradingReferencePrice = function () {
  return new TradingReferencePrice(this.message.tags[TradingReferencePrice.Tag]);
};



PriceLimits.Tag = '1306';

module.exports = PriceLimits;