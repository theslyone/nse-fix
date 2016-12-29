var invert = require('invert-obj');

function LegLastPx (legLastPx) {
  this.message = legLastPx;
}

LegLastPx.prototype.value = function () {
  return this.message;
};

LegLastPx.Tag = '637';

LegLastPx.Type = 'PRICE';

module.exports = LegLastPx;