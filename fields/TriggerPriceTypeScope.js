var invert = require('invert-obj');

function TriggerPriceTypeScope (triggerPriceTypeScope) {
  this.message = triggerPriceTypeScope;
}

TriggerPriceTypeScope.prototype.value = function () {
  return this.message;
};


TriggerPriceTypeScope.Keys = {
  'NONE': '0',
  'LOCAL': '1',
  'NATIONAL': '2',
  'GLOBAL': '3',
};

TriggerPriceTypeScope.Tag = '1108';

TriggerPriceTypeScope.Type = 'CHAR';

TriggerPriceTypeScope.Values = invert(TriggerPriceTypeScope.Keys);

module.exports = TriggerPriceTypeScope;