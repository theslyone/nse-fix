var invert = require('invert-obj');

function PriceLimitType (priceLimitType) {
  this.message = priceLimitType;
}

PriceLimitType.prototype.value = function () {
  return this.message;
};


PriceLimitType.Keys = {
  'PRICE': '0',
  'TICKS': '1',
  'PERCENTAGE': '2',
};

PriceLimitType.Tag = '1306';

PriceLimitType.Type = 'INT';

PriceLimitType.Values = invert(PriceLimitType.Keys);

module.exports = PriceLimitType;