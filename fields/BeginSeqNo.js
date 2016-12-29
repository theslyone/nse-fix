var invert = require('invert-obj');

function BeginSeqNo (beginSeqNo) {
  this.message = beginSeqNo;
}

BeginSeqNo.prototype.value = function () {
  return this.message;
};

BeginSeqNo.Tag = '7';

BeginSeqNo.Type = 'SEQNUM';

module.exports = BeginSeqNo;