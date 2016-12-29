var invert = require('invert-obj');

function SettlDeliveryType (settlDeliveryType) {
  this.message = settlDeliveryType;
}

SettlDeliveryType.prototype.value = function () {
  return this.message;
};


SettlDeliveryType.Keys = {
  'VERSUS_PAYMENT_DELIVER': '0',
  'FREE_DELIVER': '1',
  'TRI_PARTY': '2',
  'HOLD_IN_CUSTODY': '3',
};

SettlDeliveryType.Tag = '172';

SettlDeliveryType.Type = 'INT';

SettlDeliveryType.Values = invert(SettlDeliveryType.Keys);

module.exports = SettlDeliveryType;