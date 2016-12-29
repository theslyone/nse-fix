var invert = require('invert-obj');

function BidTradeType (bidTradeType) {
  this.message = bidTradeType;
}

BidTradeType.prototype.value = function () {
  return this.message;
};


BidTradeType.Keys = {
  'AGENCY': 'A',
  'VWAP_GUARANTEE': 'G',
  'GUARANTEED_CLOSE': 'J',
  'RISK_TRADE': 'R',
};

BidTradeType.Tag = '418';

BidTradeType.Type = 'CHAR';

BidTradeType.Values = invert(BidTradeType.Keys);

module.exports = BidTradeType;