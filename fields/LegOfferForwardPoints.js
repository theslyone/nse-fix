var invert = require('invert-obj');

function LegOfferForwardPoints (legOfferForwardPoints) {
  this.message = legOfferForwardPoints;
}

LegOfferForwardPoints.prototype.value = function () {
  return this.message;
};

LegOfferForwardPoints.Tag = '1068';

LegOfferForwardPoints.Type = 'PRICEOFFSET';

module.exports = LegOfferForwardPoints;