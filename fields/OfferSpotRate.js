var invert = require('invert-obj');

function OfferSpotRate (offerSpotRate) {
  this.message = offerSpotRate;
}

OfferSpotRate.prototype.value = function () {
  return this.message;
};

OfferSpotRate.Tag = '190';

OfferSpotRate.Type = 'PRICE';

module.exports = OfferSpotRate;