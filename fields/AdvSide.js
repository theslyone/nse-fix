var invert = require('invert-obj');

function AdvSide (advSide) {
  this.message = advSide;
}

AdvSide.prototype.value = function () {
  return this.message;
};


AdvSide.Keys = {
  'BUY': 'B',
  'SELL': 'S',
  'TRADE': 'T',
  'CROSS': 'X',
};

AdvSide.Tag = '4';

AdvSide.Type = 'CHAR';

AdvSide.Values = invert(AdvSide.Keys);

module.exports = AdvSide;