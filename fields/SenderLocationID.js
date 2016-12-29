var invert = require('invert-obj');

function SenderLocationID (senderLocationId) {
  this.message = senderLocationId;
}

SenderLocationID.prototype.value = function () {
  return this.message;
};

SenderLocationID.Tag = '142';

SenderLocationID.Type = 'STRING';

module.exports = SenderLocationID;