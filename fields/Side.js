var invert = require('invert-obj');

function Side (side) {
  this.message = side;
}

Side.prototype.value = function () {
  return this.message;
};


Side.Keys = {
  'BUY': '1',
  'SELL': '2',
  'BUY_MINUS': '3',
  'SELL_PLUS': '4',
  'SELL_SHORT': '5',
  'SELL_SHORT_EXEMPT': '6',
  'UNDISCLOSED': '7',
  'CROSS': '8',
  'CROSS_SHORT': '9',
  'CROSS_SHORT_EXXMPT': 'A',
  'AS_DEFINED': 'B',
  'OPPOSITE': 'C',
  'SUBSCRIBE': 'D',
  'REDEEM': 'E',
  'LEND': 'F',
  'BORROW': 'G',
};

Side.Tag = '54';

Side.Type = 'CHAR';

Side.Values = invert(Side.Keys);

module.exports = Side;