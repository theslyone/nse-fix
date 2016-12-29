var invert = require('invert-obj');

function PaymentRemitterID (paymentRemitterId) {
  this.message = paymentRemitterId;
}

PaymentRemitterID.prototype.value = function () {
  return this.message;
};

PaymentRemitterID.Tag = '505';

PaymentRemitterID.Type = 'STRING';

module.exports = PaymentRemitterID;