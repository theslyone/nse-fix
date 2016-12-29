var invert = require('invert-obj');

function MktBidPx (mktBidPx) {
  this.message = mktBidPx;
}

MktBidPx.prototype.value = function () {
  return this.message;
};

MktBidPx.Tag = '645';

MktBidPx.Type = 'PRICE';

module.exports = MktBidPx;