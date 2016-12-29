var invert = require('invert-obj');

function ApplLastSeqNum (applLastSeqNum) {
  this.message = applLastSeqNum;
}

ApplLastSeqNum.prototype.value = function () {
  return this.message;
};

ApplLastSeqNum.Tag = '1350';

ApplLastSeqNum.Type = 'SEQNUM';

module.exports = ApplLastSeqNum;