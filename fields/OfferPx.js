var invert = require('invert-obj');

function OfferPx (offerPx) {
  this.message = offerPx;
}

OfferPx.prototype.value = function () {
  return this.message;
};

OfferPx.Tag = '133';

OfferPx.Type = 'PRICE';

module.exports = OfferPx;