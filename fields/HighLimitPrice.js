var invert = require('invert-obj');

function HighLimitPrice (highLimitPrice) {
  this.message = highLimitPrice;
}

HighLimitPrice.prototype.value = function () {
  return this.message;
};

HighLimitPrice.Tag = '1149';

HighLimitPrice.Type = 'PRICE';

module.exports = HighLimitPrice;