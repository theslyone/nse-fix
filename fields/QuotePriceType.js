var invert = require('invert-obj');

function QuotePriceType (quotePriceType) {
  this.message = quotePriceType;
}

QuotePriceType.prototype.value = function () {
  return this.message;
};


QuotePriceType.Keys = {
  'PERCENT': '1',
  'YIELD': '10',
  'PER_SHARE': '2',
  'FIXED_AMOUNT': '3',
  'DISCOUNT': '4',
  'PREMIUM': '5',
  'SPREAD': '6',
  'TED_PRICE': '7',
  'TED_YIELD': '8',
  'YIELD_SPREAD': '9',
};

QuotePriceType.Tag = '692';

QuotePriceType.Type = 'INT';

QuotePriceType.Values = invert(QuotePriceType.Keys);

module.exports = QuotePriceType;