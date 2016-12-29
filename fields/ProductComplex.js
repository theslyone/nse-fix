var invert = require('invert-obj');

function ProductComplex (productComplex) {
  this.message = productComplex;
}

ProductComplex.prototype.value = function () {
  return this.message;
};

ProductComplex.Tag = '1227';

ProductComplex.Type = 'STRING';

module.exports = ProductComplex;