var invert = require('invert-obj');

function NextExpectedMsgSeqNum (nextExpectedMsgSeqNum) {
  this.message = nextExpectedMsgSeqNum;
}

NextExpectedMsgSeqNum.prototype.value = function () {
  return this.message;
};

NextExpectedMsgSeqNum.Tag = '789';

NextExpectedMsgSeqNum.Type = 'SEQNUM';

module.exports = NextExpectedMsgSeqNum;