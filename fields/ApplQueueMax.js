var invert = require('invert-obj');

function ApplQueueMax (applQueueMax) {
  this.message = applQueueMax;
}

ApplQueueMax.prototype.value = function () {
  return this.message;
};

ApplQueueMax.Tag = '812';

ApplQueueMax.Type = 'INT';

module.exports = ApplQueueMax;