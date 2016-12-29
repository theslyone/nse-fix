var invert = require('invert-obj');

function UnderlyingPriceUnitOfMeasure (underlyingPriceUnitOfMeasure) {
  this.message = underlyingPriceUnitOfMeasure;
}

UnderlyingPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPriceUnitOfMeasure.Tag = '1424';

UnderlyingPriceUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPriceUnitOfMeasure;