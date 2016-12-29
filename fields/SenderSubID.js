var invert = require('invert-obj');

function SenderSubID (senderSubId) {
  this.message = senderSubId;
}

SenderSubID.prototype.value = function () {
  return this.message;
};

SenderSubID.Tag = '50';

SenderSubID.Type = 'STRING';

module.exports = SenderSubID;