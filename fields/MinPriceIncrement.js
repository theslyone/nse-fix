var invert = require('invert-obj');

function MinPriceIncrement (minPriceIncrement) {
  this.message = minPriceIncrement;
}

MinPriceIncrement.prototype.value = function () {
  return this.message;
};

MinPriceIncrement.Tag = '969';

MinPriceIncrement.Type = 'FLOAT';

module.exports = MinPriceIncrement;