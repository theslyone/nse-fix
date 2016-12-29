var invert = require('invert-obj');

function TriggerPriceDirection (triggerPriceDirection) {
  this.message = triggerPriceDirection;
}

TriggerPriceDirection.prototype.value = function () {
  return this.message;
};


TriggerPriceDirection.Keys = {
  'TRIGGER_IF_THE_PRICE_OF_THE_SPECIFIED_TYPE_GOES_UP_TO_OR_THROUGH_THE_SPECIFIED_TRIGGER_PRICE': 'U',
  'TRIGGER_IF_THE_PRICE_OF_THE_SPECIFIED_TYPE_GOES_DOWN_TO_OR_THROUGH_THE_SPECIFIED_TRIGGER_PRICE': 'D',
};

TriggerPriceDirection.Tag = '1109';

TriggerPriceDirection.Type = 'CHAR';

TriggerPriceDirection.Values = invert(TriggerPriceDirection.Keys);

module.exports = TriggerPriceDirection;