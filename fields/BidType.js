var invert = require('invert-obj');

function BidType (bidType) {
  this.message = bidType;
}

BidType.prototype.value = function () {
  return this.message;
};


BidType.Keys = {
  'NON_DISCLOSED_STYLE': '1',
  'DISCLOSED_SYTLE': '2',
  'NO_BIDDING_PROCESS': '3',
};

BidType.Tag = '394';

BidType.Type = 'INT';

BidType.Values = invert(BidType.Keys);

module.exports = BidType;