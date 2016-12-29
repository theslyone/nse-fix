var invert = require('invert-obj');

function PaymentRef (paymentRef) {
  this.message = paymentRef;
}

PaymentRef.prototype.value = function () {
  return this.message;
};

PaymentRef.Tag = '476';

PaymentRef.Type = 'STRING';

module.exports = PaymentRef;