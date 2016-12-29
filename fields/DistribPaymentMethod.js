var invert = require('invert-obj');

function DistribPaymentMethod (distribPaymentMethod) {
  this.message = distribPaymentMethod;
}

DistribPaymentMethod.prototype.value = function () {
  return this.message;
};


DistribPaymentMethod.Keys = {
  'CREST': '1',
  'BPAY': '10',
  'HIGH_VALUE_CLEARING_SYSTEM_HVACS': '11',
  'REINVEST_IN_FUND': '12',
  'NSCC': '2',
  'EUROCLEAR': '3',
  'CLEARSTREAM': '4',
  'CHEQUE': '5',
  'TELEGRAPHIC_TRANSFER': '6',
  'FED_WIRE': '7',
  'DIRECT_CREDIT': '8',
  'ACH_CREDIT': '9',
};

DistribPaymentMethod.Tag = '477';

DistribPaymentMethod.Type = 'INT';

DistribPaymentMethod.Values = invert(DistribPaymentMethod.Keys);

module.exports = DistribPaymentMethod;