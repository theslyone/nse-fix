var invert = require('invert-obj');

function UnderlyingPx (underlyingPx) {
  this.message = underlyingPx;
}

UnderlyingPx.prototype.value = function () {
  return this.message;
};

UnderlyingPx.Tag = '810';

UnderlyingPx.Type = 'PRICE';

module.exports = UnderlyingPx;