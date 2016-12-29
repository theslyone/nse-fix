var invert = require('invert-obj');

function EndSeqNo (endSeqNo) {
  this.message = endSeqNo;
}

EndSeqNo.prototype.value = function () {
  return this.message;
};

EndSeqNo.Tag = '16';

EndSeqNo.Type = 'SEQNUM';

module.exports = EndSeqNo;