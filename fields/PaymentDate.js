var invert = require('invert-obj');

function PaymentDate (paymentDate) {
  this.message = paymentDate;
}

PaymentDate.prototype.value = function () {
  return this.message;
};

PaymentDate.Tag = '504';

PaymentDate.Type = 'LOCALMKTDATE';

module.exports = PaymentDate;