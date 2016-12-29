var invert = require('invert-obj');

function SendingTime (sendingTime) {
  this.message = sendingTime;
}

SendingTime.prototype.value = function () {
  return this.message;
};

SendingTime.Tag = '52';

SendingTime.Type = 'UTCTIMESTAMP';

module.exports = SendingTime;