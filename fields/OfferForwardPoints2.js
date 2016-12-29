var invert = require('invert-obj');

function OfferForwardPoints2 (offerForwardPoints2) {
  this.message = offerForwardPoints2;
}

OfferForwardPoints2.prototype.value = function () {
  return this.message;
};

OfferForwardPoints2.Tag = '643';

OfferForwardPoints2.Type = 'PRICEOFFSET';

module.exports = OfferForwardPoints2;