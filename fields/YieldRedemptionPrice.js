var invert = require('invert-obj');

function YieldRedemptionPrice (yieldRedemptionPrice) {
  this.message = yieldRedemptionPrice;
}

YieldRedemptionPrice.prototype.value = function () {
  return this.message;
};

YieldRedemptionPrice.Tag = '697';

YieldRedemptionPrice.Type = 'PRICE';

module.exports = YieldRedemptionPrice;