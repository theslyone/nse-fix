var invert = require('invert-obj');

function SendingDate (sendingDate) {
  this.message = sendingDate;
}

SendingDate.prototype.value = function () {
  return this.message;
};

SendingDate.Tag = '51';

SendingDate.Type = 'LOCALMKTDATE';

module.exports = SendingDate;