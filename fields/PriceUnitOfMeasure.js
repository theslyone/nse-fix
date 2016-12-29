var invert = require('invert-obj');

function PriceUnitOfMeasure (priceUnitOfMeasure) {
  this.message = priceUnitOfMeasure;
}

PriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PriceUnitOfMeasure.Tag = '1191';

PriceUnitOfMeasure.Type = 'STRING';

module.exports = PriceUnitOfMeasure;