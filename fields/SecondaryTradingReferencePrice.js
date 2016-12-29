var invert = require('invert-obj');

function SecondaryTradingReferencePrice (secondaryTradingReferencePrice) {
  this.message = secondaryTradingReferencePrice;
}

SecondaryTradingReferencePrice.prototype.value = function () {
  return this.message;
};

SecondaryTradingReferencePrice.Tag = '1240';

SecondaryTradingReferencePrice.Type = 'PRICE';

module.exports = SecondaryTradingReferencePrice;