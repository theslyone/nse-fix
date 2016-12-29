var invert = require('invert-obj');

function ApplNewSeqNum (applNewSeqNum) {
  this.message = applNewSeqNum;
}

ApplNewSeqNum.prototype.value = function () {
  return this.message;
};

ApplNewSeqNum.Tag = '1399';

ApplNewSeqNum.Type = 'SEQNUM';

module.exports = ApplNewSeqNum;