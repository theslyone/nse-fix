var invert = require('invert-obj');

function TickDirection (tickDirection) {
  this.message = tickDirection;
}

TickDirection.prototype.value = function () {
  return this.message;
};


TickDirection.Keys = {
  'PLUS_TICK': '0',
  'ZERO_PLUS_TICK': '1',
  'MINUS_TICK': '2',
  'ZERO_MINUS_TICK': '3',
};

TickDirection.Tag = '274';

TickDirection.Type = 'CHAR';

TickDirection.Values = invert(TickDirection.Keys);

module.exports = TickDirection;