var invert = require('invert-obj');

function OnBehalfOfSendingTime (onBehalfOfSendingTime) {
  this.message = onBehalfOfSendingTime;
}

OnBehalfOfSendingTime.prototype.value = function () {
  return this.message;
};

OnBehalfOfSendingTime.Tag = '370';

OnBehalfOfSendingTime.Type = 'UTCTIMESTAMP';

module.exports = OnBehalfOfSendingTime;