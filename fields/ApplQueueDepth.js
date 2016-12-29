var invert = require('invert-obj');

function ApplQueueDepth (applQueueDepth) {
  this.message = applQueueDepth;
}

ApplQueueDepth.prototype.value = function () {
  return this.message;
};

ApplQueueDepth.Tag = '813';

ApplQueueDepth.Type = 'INT';

module.exports = ApplQueueDepth;