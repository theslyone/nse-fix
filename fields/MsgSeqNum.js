var invert = require('invert-obj');

function MsgSeqNum (msgSeqNum) {
  this.message = msgSeqNum;
}

MsgSeqNum.prototype.value = function () {
  return this.message;
};

MsgSeqNum.Tag = '34';

MsgSeqNum.Type = 'SEQNUM';

module.exports = MsgSeqNum;