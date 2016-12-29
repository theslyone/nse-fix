var invert = require('invert-obj');

function DeliveryDate (deliveryDate) {
  this.message = deliveryDate;
}

DeliveryDate.prototype.value = function () {
  return this.message;
};

DeliveryDate.Tag = '743';

DeliveryDate.Type = 'LOCALMKTDATE';

module.exports = DeliveryDate;