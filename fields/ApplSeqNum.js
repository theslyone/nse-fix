var invert = require('invert-obj');

function ApplSeqNum (applSeqNum) {
  this.message = applSeqNum;
}

ApplSeqNum.prototype.value = function () {
  return this.message;
};

ApplSeqNum.Tag = '1181';

ApplSeqNum.Type = 'SEQNUM';

module.exports = ApplSeqNum;