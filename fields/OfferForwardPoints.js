var invert = require('invert-obj');

function OfferForwardPoints (offerForwardPoints) {
  this.message = offerForwardPoints;
}

OfferForwardPoints.prototype.value = function () {
  return this.message;
};

OfferForwardPoints.Tag = '191';

OfferForwardPoints.Type = 'PRICEOFFSET';

module.exports = OfferForwardPoints;