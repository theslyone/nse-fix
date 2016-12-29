var invert = require('invert-obj');

function LegProduct (legProduct) {
  this.message = legProduct;
}

LegProduct.prototype.value = function () {
  return this.message;
};

LegProduct.Tag = '607';

LegProduct.Type = 'INT';

module.exports = LegProduct;