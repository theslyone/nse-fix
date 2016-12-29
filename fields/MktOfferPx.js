var invert = require('invert-obj');

function MktOfferPx (mktOfferPx) {
  this.message = mktOfferPx;
}

MktOfferPx.prototype.value = function () {
  return this.message;
};

MktOfferPx.Tag = '646';

MktOfferPx.Type = 'PRICE';

module.exports = MktOfferPx;