var invert = require('invert-obj');

function ExecPriceType (execPriceType) {
  this.message = execPriceType;
}

ExecPriceType.prototype.value = function () {
  return this.message;
};


ExecPriceType.Keys = {
  'BID_PRICE': 'B',
  'CREATION_PRICE': 'C',
  'CREATION_PRICE_PLUS_ADJUSTMENT_PERCENT': 'D',
  'CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT': 'E',
  'OFFER_PRICE': 'O',
  'OFFER_PRICE_MINUS_ADJUSTMENT_PERCENT': 'P',
  'OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT': 'Q',
  'SINGLE_PRICE': 'S',
};

ExecPriceType.Tag = '484';

ExecPriceType.Type = 'CHAR';

ExecPriceType.Values = invert(ExecPriceType.Keys);

module.exports = ExecPriceType;