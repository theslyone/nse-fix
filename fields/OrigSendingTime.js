var invert = require('invert-obj');

function OrigSendingTime (origSendingTime) {
  this.message = origSendingTime;
}

OrigSendingTime.prototype.value = function () {
  return this.message;
};

OrigSendingTime.Tag = '122';

OrigSendingTime.Type = 'UTCTIMESTAMP';

module.exports = OrigSendingTime;