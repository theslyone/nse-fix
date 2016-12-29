var invert = require('invert-obj');

function RefSeqNum (refSeqNum) {
  this.message = refSeqNum;
}

RefSeqNum.prototype.value = function () {
  return this.message;
};

RefSeqNum.Tag = '45';

RefSeqNum.Type = 'SEQNUM';

module.exports = RefSeqNum;