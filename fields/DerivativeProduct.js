var invert = require('invert-obj');

function DerivativeProduct (derivativeProduct) {
  this.message = derivativeProduct;
}

DerivativeProduct.prototype.value = function () {
  return this.message;
};

DerivativeProduct.Tag = '1246';

DerivativeProduct.Type = 'INT';

module.exports = DerivativeProduct;