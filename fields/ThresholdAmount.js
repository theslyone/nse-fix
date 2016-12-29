var invert = require('invert-obj');

function ThresholdAmount (thresholdAmount) {
  this.message = thresholdAmount;
}

ThresholdAmount.prototype.value = function () {
  return this.message;
};

ThresholdAmount.Tag = '834';

ThresholdAmount.Type = 'PRICEOFFSET';

module.exports = ThresholdAmount;