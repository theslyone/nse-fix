var invert = require('invert-obj');

function LegPriceUnitOfMeasure (legPriceUnitOfMeasure) {
  this.message = legPriceUnitOfMeasure;
}

LegPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegPriceUnitOfMeasure.Tag = '1421';

LegPriceUnitOfMeasure.Type = 'STRING';

module.exports = LegPriceUnitOfMeasure;