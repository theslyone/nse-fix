var invert = require('invert-obj');

function HopSendingTime (hopSendingTime) {
  this.message = hopSendingTime;
}

HopSendingTime.prototype.value = function () {
  return this.message;
};

HopSendingTime.Tag = '629';

HopSendingTime.Type = 'UTCTIMESTAMP';

module.exports = HopSendingTime;