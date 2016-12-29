var invert = require('invert-obj');

function LowLimitPrice (lowLimitPrice) {
  this.message = lowLimitPrice;
}

LowLimitPrice.prototype.value = function () {
  return this.message;
};

LowLimitPrice.Tag = '1148';

LowLimitPrice.Type = 'PRICE';

module.exports = LowLimitPrice;