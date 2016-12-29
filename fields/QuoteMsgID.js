var invert = require('invert-obj');

function QuoteMsgID (quoteMsgId) {
  this.message = quoteMsgId;
}

QuoteMsgID.prototype.value = function () {
  return this.message;
};

QuoteMsgID.Tag = '1166';

QuoteMsgID.Type = 'STRING';

module.exports = QuoteMsgID;