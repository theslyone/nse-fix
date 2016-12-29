var invert = require('invert-obj');

function PaymentMethod (paymentMethod) {
  this.message = paymentMethod;
}

PaymentMethod.prototype.value = function () {
  return this.message;
};


PaymentMethod.Keys = {
  'CREST': '1',
  'DIRECT_CREDIT': '10',
  'CREDIT_CARD': '11',
  'ACH_DEBIT': '12',
  'ACH_CREDIT': '13',
  'BPAY': '14',
  'HIGH_VALUE_CLEARING_SYSTEM': '15',
  'NSCC': '2',
  'EUROCLEAR': '3',
  'CLEARSTREAM': '4',
  'CHEQUE': '5',
  'TELEGRAPHIC_TRANSFER': '6',
  'FED_WIRE': '7',
  'DEBIT_CARD': '8',
  'DIRECT_DEBIT': '9',
};

PaymentMethod.Tag = '492';

PaymentMethod.Type = 'INT';

PaymentMethod.Values = invert(PaymentMethod.Keys);

module.exports = PaymentMethod;