var invert = require('invert-obj');

function LegCouponPaymentDate (legCouponPaymentDate) {
  this.message = legCouponPaymentDate;
}

LegCouponPaymentDate.prototype.value = function () {
  return this.message;
};

LegCouponPaymentDate.Tag = '248';

LegCouponPaymentDate.Type = 'LOCALMKTDATE';

module.exports = LegCouponPaymentDate;