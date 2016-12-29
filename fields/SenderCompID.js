var invert = require('invert-obj');

function SenderCompID (senderCompId) {
  this.message = senderCompId;
}

SenderCompID.prototype.value = function () {
  return this.message;
};

SenderCompID.Tag = '49';

SenderCompID.Type = 'STRING';

module.exports = SenderCompID;