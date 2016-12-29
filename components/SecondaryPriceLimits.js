var SecondaryPriceLimitType = require('../fields/SecondaryPriceLimitType');
var SecondaryLowLimitPrice = require('../fields/SecondaryLowLimitPrice');
var SecondaryHighLimitPrice = require('../fields/SecondaryHighLimitPrice');
var SecondaryTradingReferencePrice = require('../fields/SecondaryTradingReferencePrice');

function SecondaryPriceLimits (secondaryPriceLimits) {
  this.message = secondaryPriceLimits;
}
/* field */
SecondaryPriceLimits.prototype.secondaryPriceLimitType = function () {
  return new SecondaryPriceLimitType(this.message.tags[SecondaryPriceLimitType.Tag]);
};

/* field */
SecondaryPriceLimits.prototype.secondaryLowLimitPrice = function () {
  return new SecondaryLowLimitPrice(this.message.tags[SecondaryLowLimitPrice.Tag]);
};

/* field */
SecondaryPriceLimits.prototype.secondaryHighLimitPrice = function () {
  return new SecondaryHighLimitPrice(this.message.tags[SecondaryHighLimitPrice.Tag]);
};

/* field */
SecondaryPriceLimits.prototype.secondaryTradingReferencePrice = function () {
  return new SecondaryTradingReferencePrice(this.message.tags[SecondaryTradingReferencePrice.Tag]);
};



SecondaryPriceLimits.Tag = '1305';

module.exports = SecondaryPriceLimits;