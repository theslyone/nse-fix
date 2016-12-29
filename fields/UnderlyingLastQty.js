var invert = require('invert-obj');

function UnderlyingLastQty (underlyingLastQty) {
  this.message = underlyingLastQty;
}

UnderlyingLastQty.prototype.value = function () {
  return this.message;
};

UnderlyingLastQty.Tag = '652';

UnderlyingLastQty.Type = 'QTY';

module.exports = UnderlyingLastQty;