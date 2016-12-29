var invert = require('invert-obj');

function SecondaryHighLimitPrice (secondaryHighLimitPrice) {
  this.message = secondaryHighLimitPrice;
}

SecondaryHighLimitPrice.prototype.value = function () {
  return this.message;
};

SecondaryHighLimitPrice.Tag = '1230';

SecondaryHighLimitPrice.Type = 'PRICE';

module.exports = SecondaryHighLimitPrice;