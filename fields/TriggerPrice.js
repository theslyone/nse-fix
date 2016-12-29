var invert = require('invert-obj');

function TriggerPrice (triggerPrice) {
  this.message = triggerPrice;
}

TriggerPrice.prototype.value = function () {
  return this.message;
};

TriggerPrice.Tag = '1102';

TriggerPrice.Type = 'PRICE';

module.exports = TriggerPrice;