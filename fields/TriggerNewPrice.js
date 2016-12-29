var invert = require('invert-obj');

function TriggerNewPrice (triggerNewPrice) {
  this.message = triggerNewPrice;
}

TriggerNewPrice.prototype.value = function () {
  return this.message;
};

TriggerNewPrice.Tag = '1110';

TriggerNewPrice.Type = 'PRICE';

module.exports = TriggerNewPrice;