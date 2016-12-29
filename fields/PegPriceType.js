var invert = require('invert-obj');

function PegPriceType (pegPriceType) {
  this.message = pegPriceType;
}

PegPriceType.prototype.value = function () {
  return this.message;
};


PegPriceType.Keys = {
  'LAST_PEG': '1',
  'MID_PRICE_PEG': '2',
  'OPENING_PEG': '3',
  'MARKET_PEG': '4',
  'PRIMARY_PEG': '5',
  'PEG_TO_VWAP': '7',
  'TRAILING_STOP_PEG': '8',
  'PEG_TO_LIMIT_PRICE': '9',
};

PegPriceType.Tag = '1094';

PegPriceType.Type = 'INT';

PegPriceType.Values = invert(PegPriceType.Keys);

module.exports = PegPriceType;