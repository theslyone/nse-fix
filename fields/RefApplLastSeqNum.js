var invert = require('invert-obj');

function RefApplLastSeqNum (refApplLastSeqNum) {
  this.message = refApplLastSeqNum;
}

RefApplLastSeqNum.prototype.value = function () {
  return this.message;
};

RefApplLastSeqNum.Tag = '1357';

RefApplLastSeqNum.Type = 'SEQNUM';

module.exports = RefApplLastSeqNum;