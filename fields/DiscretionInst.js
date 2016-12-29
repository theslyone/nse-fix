var invert = require('invert-obj');

function DiscretionInst (discretionInst) {
  this.message = discretionInst;
}

DiscretionInst.prototype.value = function () {
  return this.message;
};


DiscretionInst.Keys = {
  'RELATED_TO_DISPLAYED_PRICE': '0',
  'RELATED_TO_MARKET_PRICE': '1',
  'RELATED_TO_PRIMARY_PRICE': '2',
  'RELATED_TO_LOCAL_PRIMARY_PRICE': '3',
  'RELATED_TO_MIDPOINT_PRICE': '4',
  'RELATED_TO_LAST_TRADE_PRICE': '5',
  'RELATED_TO_VWAP': '6',
  'AVERAGE_PRICE_GUARANTEE': '7',
};

DiscretionInst.Tag = '388';

DiscretionInst.Type = 'CHAR';

DiscretionInst.Values = invert(DiscretionInst.Keys);

module.exports = DiscretionInst;