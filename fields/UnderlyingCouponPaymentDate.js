var invert = require('invert-obj');

function UnderlyingCouponPaymentDate (underlyingCouponPaymentDate) {
  this.message = underlyingCouponPaymentDate;
}

UnderlyingCouponPaymentDate.prototype.value = function () {
  return this.message;
};

UnderlyingCouponPaymentDate.Tag = '241';

UnderlyingCouponPaymentDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingCouponPaymentDate;