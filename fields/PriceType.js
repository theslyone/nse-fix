var invert = require('invert-obj');

function PriceType (priceType) {
  this.message = priceType;
}

PriceType.prototype.value = function () {
  return this.message;
};


PriceType.Keys = {
  'PERCENTAGE': '1',
  'FIXED_CABINET_TRADE_PRICE': '10',
  'VARIABLE_CABINET_TRADE_PRICE': '11',
  'PER_UNIT': '2',
  'FIXED_AMOUNT': '3',
  'DISCOUNT': '4',
  'PREMIUM': '5',
  'SPREAD': '6',
  'TED_PRICE': '7',
  'TED_YIELD': '8',
  'YIELD': '9',
  'PRODUCT_TICKS_IN_HALFS': '13',
  'PRODUCT_TICKS_IN_FOURTHS': '14',
  'PRODUCT_TICKS_IN_EIGHTS': '15',
  'PRODUCT_TICKS_IN_SIXTEENTHS': '16',
  'PRODUCT_TICKS_IN_THIRTY_SECONDS': '17',
  'PRODUCT_TICKS_IN_SIXTY_FORTHS': '18',
  'PRODUCT_TICKS_IN_ONE_TWENTY_EIGHTS': '19',
};

PriceType.Tag = '423';

PriceType.Type = 'INT';

PriceType.Values = invert(PriceType.Keys);

module.exports = PriceType;