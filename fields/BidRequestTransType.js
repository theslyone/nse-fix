var invert = require('invert-obj');

function BidRequestTransType (bidRequestTransType) {
  this.message = bidRequestTransType;
}

BidRequestTransType.prototype.value = function () {
  return this.message;
};


BidRequestTransType.Keys = {
  'CANCEL': 'C',
  'NO': 'N',
};

BidRequestTransType.Tag = '374';

BidRequestTransType.Type = 'CHAR';

BidRequestTransType.Values = invert(BidRequestTransType.Keys);

module.exports = BidRequestTransType;