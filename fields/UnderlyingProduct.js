var invert = require('invert-obj');

function UnderlyingProduct (underlyingProduct) {
  this.message = underlyingProduct;
}

UnderlyingProduct.prototype.value = function () {
  return this.message;
};

UnderlyingProduct.Tag = '462';

UnderlyingProduct.Type = 'INT';

module.exports = UnderlyingProduct;