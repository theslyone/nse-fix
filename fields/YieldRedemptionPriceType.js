var invert = require('invert-obj');

function YieldRedemptionPriceType (yieldRedemptionPriceType) {
  this.message = yieldRedemptionPriceType;
}

YieldRedemptionPriceType.prototype.value = function () {
  return this.message;
};

YieldRedemptionPriceType.Tag = '698';

YieldRedemptionPriceType.Type = 'INT';

module.exports = YieldRedemptionPriceType;