var invert = require('invert-obj');

function CouponRate (couponRate) {
  this.message = couponRate;
}

CouponRate.prototype.value = function () {
  return this.message;
};

CouponRate.Tag = '223';

CouponRate.Type = 'PERCENTAGE';

module.exports = CouponRate;