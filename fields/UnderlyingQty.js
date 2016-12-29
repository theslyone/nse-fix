var invert = require('invert-obj');

function UnderlyingQty (underlyingQty) {
  this.message = underlyingQty;
}

UnderlyingQty.prototype.value = function () {
  return this.message;
};

UnderlyingQty.Tag = '879';

UnderlyingQty.Type = 'QTY';

module.exports = UnderlyingQty;