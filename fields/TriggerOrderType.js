var invert = require('invert-obj');

function TriggerOrderType (triggerOrderType) {
  this.message = triggerOrderType;
}

TriggerOrderType.prototype.value = function () {
  return this.message;
};


TriggerOrderType.Keys = {
  'MARKET': '1',
  'LIMIT': '2',
};

TriggerOrderType.Tag = '1111';

TriggerOrderType.Type = 'CHAR';

TriggerOrderType.Values = invert(TriggerOrderType.Keys);

module.exports = TriggerOrderType;