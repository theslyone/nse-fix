var invert = require('invert-obj');

function TickIncrement (tickIncrement) {
  this.message = tickIncrement;
}

TickIncrement.prototype.value = function () {
  return this.message;
};

TickIncrement.Tag = '1208';

TickIncrement.Type = 'PRICE';

module.exports = TickIncrement;