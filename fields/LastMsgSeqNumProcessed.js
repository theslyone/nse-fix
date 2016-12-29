var invert = require('invert-obj');

function LastMsgSeqNumProcessed (lastMsgSeqNumProcessed) {
  this.message = lastMsgSeqNumProcessed;
}

LastMsgSeqNumProcessed.prototype.value = function () {
  return this.message;
};

LastMsgSeqNumProcessed.Tag = '369';

LastMsgSeqNumProcessed.Type = 'SEQNUM';

module.exports = LastMsgSeqNumProcessed;