var invert = require('invert-obj');

function OfferSize (offerSize) {
  this.message = offerSize;
}

OfferSize.prototype.value = function () {
  return this.message;
};

OfferSize.Tag = '135';

OfferSize.Type = 'QTY';

module.exports = OfferSize;