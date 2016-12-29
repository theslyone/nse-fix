var invert = require('invert-obj');

function TriggerAction (triggerAction) {
  this.message = triggerAction;
}

TriggerAction.prototype.value = function () {
  return this.message;
};


TriggerAction.Keys = {
  'ACTIVATE': '1',
  'MODIFY': '2',
  'CANCEL': '3',
};

TriggerAction.Tag = '1101';

TriggerAction.Type = 'CHAR';

TriggerAction.Values = invert(TriggerAction.Keys);

module.exports = TriggerAction;