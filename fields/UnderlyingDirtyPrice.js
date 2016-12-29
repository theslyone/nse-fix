var invert = require('invert-obj');

function UnderlyingDirtyPrice (underlyingDirtyPrice) {
  this.message = underlyingDirtyPrice;
}

UnderlyingDirtyPrice.prototype.value = function () {
  return this.message;
};

UnderlyingDirtyPrice.Tag = '882';

UnderlyingDirtyPrice.Type = 'PRICE';

module.exports = UnderlyingDirtyPrice;