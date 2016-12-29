var invert = require('invert-obj');

function ApplBegSeqNum (applBegSeqNum) {
  this.message = applBegSeqNum;
}

ApplBegSeqNum.prototype.value = function () {
  return this.message;
};

ApplBegSeqNum.Tag = '1182';

ApplBegSeqNum.Type = 'SEQNUM';

module.exports = ApplBegSeqNum;