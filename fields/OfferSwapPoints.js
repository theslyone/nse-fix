var invert = require('invert-obj');

function OfferSwapPoints (offerSwapPoints) {
  this.message = offerSwapPoints;
}

OfferSwapPoints.prototype.value = function () {
  return this.message;
};

OfferSwapPoints.Tag = '1066';

OfferSwapPoints.Type = 'PRICEOFFSET';

module.exports = OfferSwapPoints;