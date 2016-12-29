var invert = require('invert-obj');

function DKReason (dkreason) {
  this.message = dkreason;
}

DKReason.prototype.value = function () {
  return this.message;
};


DKReason.Keys = {
  'UNKNOWN_SYMBOL': 'A',
  'WRONG_SIDE': 'B',
  'QUANTITY_EXCEEDS_ORDER': 'C',
  'NO_MATCHING_ORDER': 'D',
  'PRICE_EXCEEDS_LIMIT': 'E',
  'CALCULATION_DIFFERENCE': 'F',
  'OTHER': 'Z',
};

DKReason.Tag = '127';

DKReason.Type = 'CHAR';

DKReason.Values = invert(DKReason.Keys);

module.exports = DKReason;