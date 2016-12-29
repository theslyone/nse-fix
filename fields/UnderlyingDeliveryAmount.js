var invert = require('invert-obj');

function UnderlyingDeliveryAmount (underlyingDeliveryAmount) {
  this.message = underlyingDeliveryAmount;
}

UnderlyingDeliveryAmount.prototype.value = function () {
  return this.message;
};

UnderlyingDeliveryAmount.Tag = '1037';

UnderlyingDeliveryAmount.Type = 'AMT';

module.exports = UnderlyingDeliveryAmount;