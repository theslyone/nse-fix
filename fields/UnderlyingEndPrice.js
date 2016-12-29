var invert = require('invert-obj');

function UnderlyingEndPrice (underlyingEndPrice) {
  this.message = underlyingEndPrice;
}

UnderlyingEndPrice.prototype.value = function () {
  return this.message;
};

UnderlyingEndPrice.Tag = '883';

UnderlyingEndPrice.Type = 'PRICE';

module.exports = UnderlyingEndPrice;