var invert = require('invert-obj');

function RoundingDirection (roundingDirection) {
  this.message = roundingDirection;
}

RoundingDirection.prototype.value = function () {
  return this.message;
};


RoundingDirection.Keys = {
  'ROUND_TO_NEAREST': '0',
  'ROUND_DOWN': '1',
  'ROUND_UP': '2',
};

RoundingDirection.Tag = '468';

RoundingDirection.Type = 'CHAR';

RoundingDirection.Values = invert(RoundingDirection.Keys);

module.exports = RoundingDirection;