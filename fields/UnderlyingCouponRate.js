var invert = require('invert-obj');

function UnderlyingCouponRate (underlyingCouponRate) {
  this.message = underlyingCouponRate;
}

UnderlyingCouponRate.prototype.value = function () {
  return this.message;
};

UnderlyingCouponRate.Tag = '435';

UnderlyingCouponRate.Type = 'PERCENTAGE';

module.exports = UnderlyingCouponRate;