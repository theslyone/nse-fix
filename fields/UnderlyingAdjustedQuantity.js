var invert = require('invert-obj');

function UnderlyingAdjustedQuantity (underlyingAdjustedQuantity) {
  this.message = underlyingAdjustedQuantity;
}

UnderlyingAdjustedQuantity.prototype.value = function () {
  return this.message;
};

UnderlyingAdjustedQuantity.Tag = '1044';

UnderlyingAdjustedQuantity.Type = 'QTY';

module.exports = UnderlyingAdjustedQuantity;