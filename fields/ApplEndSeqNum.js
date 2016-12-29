var invert = require('invert-obj');

function ApplEndSeqNum (applEndSeqNum) {
  this.message = applEndSeqNum;
}

ApplEndSeqNum.prototype.value = function () {
  return this.message;
};

ApplEndSeqNum.Tag = '1183';

ApplEndSeqNum.Type = 'SEQNUM';

module.exports = ApplEndSeqNum;