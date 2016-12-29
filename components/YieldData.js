var YieldType = require('../fields/YieldType');
var Yield = require('../fields/Yield');
var YieldCalcDate = require('../fields/YieldCalcDate');
var YieldRedemptionDate = require('../fields/YieldRedemptionDate');
var YieldRedemptionPrice = require('../fields/YieldRedemptionPrice');
var YieldRedemptionPriceType = require('../fields/YieldRedemptionPriceType');

function YieldData (yieldData) {
  this.message = yieldData;
}
/* field */
YieldData.prototype.yieldType = function () {
  return new YieldType(this.message.tags[YieldType.Tag]);
};

/* field */
YieldData.prototype.yield = function () {
  return new Yield(this.message.tags[Yield.Tag]);
};

/* field */
YieldData.prototype.yieldCalcDate = function () {
  return new YieldCalcDate(this.message.tags[YieldCalcDate.Tag]);
};

/* field */
YieldData.prototype.yieldRedemptionDate = function () {
  return new YieldRedemptionDate(this.message.tags[YieldRedemptionDate.Tag]);
};

/* field */
YieldData.prototype.yieldRedemptionPrice = function () {
  return new YieldRedemptionPrice(this.message.tags[YieldRedemptionPrice.Tag]);
};

/* field */
YieldData.prototype.yieldRedemptionPriceType = function () {
  return new YieldRedemptionPriceType(this.message.tags[YieldRedemptionPriceType.Tag]);
};



YieldData.Tag = '235';

module.exports = YieldData;