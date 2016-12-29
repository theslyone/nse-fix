var invert = require('invert-obj');

function ApplQueueResolution (applQueueResolution) {
  this.message = applQueueResolution;
}

ApplQueueResolution.prototype.value = function () {
  return this.message;
};


ApplQueueResolution.Keys = {
  'NO_ACTION_TAKEN': '0',
  'QUEUE_FLUSHED': '1',
  'OVERLAY_LAST': '2',
  'END_SESSION': '3',
};

ApplQueueResolution.Tag = '814';

ApplQueueResolution.Type = 'INT';

ApplQueueResolution.Values = invert(ApplQueueResolution.Keys);

module.exports = ApplQueueResolution;