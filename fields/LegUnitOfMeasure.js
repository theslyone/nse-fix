var invert = require('invert-obj');

function LegUnitOfMeasure (legUnitOfMeasure) {
  this.message = legUnitOfMeasure;
}

LegUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegUnitOfMeasure.Tag = '999';

LegUnitOfMeasure.Type = 'STRING';

module.exports = LegUnitOfMeasure;