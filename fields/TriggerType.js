var invert = require('invert-obj');

function TriggerType (triggerType) {
  this.message = triggerType;
}

TriggerType.prototype.value = function () {
  return this.message;
};


TriggerType.Keys = {
  'PARTIAL_EXECUTION': '1',
  'SPECIFIED_TRADING_SESSION': '2',
  'NEXT_AUCTION': '3',
  'PRICE_MOVEMENT': '4',
};

TriggerType.Tag = '1100';

TriggerType.Type = 'CHAR';

TriggerType.Values = invert(TriggerType.Keys);

module.exports = TriggerType;