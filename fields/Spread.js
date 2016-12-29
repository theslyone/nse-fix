var invert = require('invert-obj');

function Spread (spread) {
  this.message = spread;
}

Spread.prototype.value = function () {
  return this.message;
};

Spread.Tag = '218';

Spread.Type = 'PRICEOFFSET';

module.exports = Spread;