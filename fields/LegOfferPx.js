var invert = require('invert-obj');

function LegOfferPx (legOfferPx) {
  this.message = legOfferPx;
}

LegOfferPx.prototype.value = function () {
  return this.message;
};

LegOfferPx.Tag = '684';

LegOfferPx.Type = 'PRICE';

module.exports = LegOfferPx;