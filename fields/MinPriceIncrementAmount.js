var invert = require('invert-obj');

function MinPriceIncrementAmount (minPriceIncrementAmount) {
  this.message = minPriceIncrementAmount;
}

MinPriceIncrementAmount.prototype.value = function () {
  return this.message;
};

MinPriceIncrementAmount.Tag = '1146';

MinPriceIncrementAmount.Type = 'AMT';

module.exports = MinPriceIncrementAmount;