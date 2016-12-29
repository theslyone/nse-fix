var invert = require('invert-obj');

function TriggerNewQty (triggerNewQty) {
  this.message = triggerNewQty;
}

TriggerNewQty.prototype.value = function () {
  return this.message;
};

TriggerNewQty.Tag = '1112';

TriggerNewQty.Type = 'QTY';

module.exports = TriggerNewQty;