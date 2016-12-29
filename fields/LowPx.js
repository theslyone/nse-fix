var invert = require('invert-obj');

function LowPx (lowPx) {
  this.message = lowPx;
}

LowPx.prototype.value = function () {
  return this.message;
};

LowPx.Tag = '333';

LowPx.Type = 'PRICE';

module.exports = LowPx;