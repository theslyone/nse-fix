var invert = require('invert-obj');

function LegBidPx (legBidPx) {
  this.message = legBidPx;
}

LegBidPx.prototype.value = function () {
  return this.message;
};

LegBidPx.Tag = '681';

LegBidPx.Type = 'PRICE';

module.exports = LegBidPx;