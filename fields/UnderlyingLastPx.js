var invert = require('invert-obj');

function UnderlyingLastPx (underlyingLastPx) {
  this.message = underlyingLastPx;
}

UnderlyingLastPx.prototype.value = function () {
  return this.message;
};

UnderlyingLastPx.Tag = '651';

UnderlyingLastPx.Type = 'PRICE';

module.exports = UnderlyingLastPx;