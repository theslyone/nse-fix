var invert = require('invert-obj');

function CouponPaymentDate (couponPaymentDate) {
  this.message = couponPaymentDate;
}

CouponPaymentDate.prototype.value = function () {
  return this.message;
};

CouponPaymentDate.Tag = '224';

CouponPaymentDate.Type = 'LOCALMKTDATE';

module.exports = CouponPaymentDate;