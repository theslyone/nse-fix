var invert = require('invert-obj');

function MinOfferSize (minOfferSize) {
  this.message = minOfferSize;
}

MinOfferSize.prototype.value = function () {
  return this.message;
};

MinOfferSize.Tag = '648';

MinOfferSize.Type = 'QTY';

module.exports = MinOfferSize;