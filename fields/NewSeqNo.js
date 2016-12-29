var invert = require('invert-obj');

function NewSeqNo (newSeqNo) {
  this.message = newSeqNo;
}

NewSeqNo.prototype.value = function () {
  return this.message;
};

NewSeqNo.Tag = '36';

NewSeqNo.Type = 'SEQNUM';

module.exports = NewSeqNo;