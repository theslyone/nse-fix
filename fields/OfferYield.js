var invert = require('invert-obj');

function OfferYield (offerYield) {
  this.message = offerYield;
}

OfferYield.prototype.value = function () {
  return this.message;
};

OfferYield.Tag = '634';

OfferYield.Type = 'PERCENTAGE';

module.exports = OfferYield;