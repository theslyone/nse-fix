var invert = require('invert-obj');

function PriceImprovement (priceImprovement) {
  this.message = priceImprovement;
}

PriceImprovement.prototype.value = function () {
  return this.message;
};

PriceImprovement.Tag = '639';

PriceImprovement.Type = 'PRICEOFFSET';

module.exports = PriceImprovement;