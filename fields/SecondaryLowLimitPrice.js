var invert = require('invert-obj');

function SecondaryLowLimitPrice (secondaryLowLimitPrice) {
  this.message = secondaryLowLimitPrice;
}

SecondaryLowLimitPrice.prototype.value = function () {
  return this.message;
};

SecondaryLowLimitPrice.Tag = '1221';

SecondaryLowLimitPrice.Type = 'PRICE';

module.exports = SecondaryLowLimitPrice;