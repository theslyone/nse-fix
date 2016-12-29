var invert = require('invert-obj');

function LegCouponRate (legCouponRate) {
  this.message = legCouponRate;
}

LegCouponRate.prototype.value = function () {
  return this.message;
};

LegCouponRate.Tag = '615';

LegCouponRate.Type = 'PERCENTAGE';

module.exports = LegCouponRate;