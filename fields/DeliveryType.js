var invert = require('invert-obj');

function DeliveryType (deliveryType) {
  this.message = deliveryType;
}

DeliveryType.prototype.value = function () {
  return this.message;
};


DeliveryType.Keys = {
  'VERSUS_PAYMENT_DELIVER': '0',
  'FREE_DELIVER': '1',
  'TRI_PARTY': '2',
  'HOLD_IN_CUSTODY': '3',
};

DeliveryType.Tag = '919';

DeliveryType.Type = 'INT';

DeliveryType.Values = invert(DeliveryType.Keys);

module.exports = DeliveryType;