var invert = require('invert-obj');

function ApplQueueAction (applQueueAction) {
  this.message = applQueueAction;
}

ApplQueueAction.prototype.value = function () {
  return this.message;
};


ApplQueueAction.Keys = {
  'NO_ACTION_TAKEN': '0',
  'QUEUE_FLUSHED': '1',
  'OVERLAY_LAST': '2',
  'END_SESSION': '3',
};

ApplQueueAction.Tag = '815';

ApplQueueAction.Type = 'INT';

ApplQueueAction.Values = invert(ApplQueueAction.Keys);

module.exports = ApplQueueAction;